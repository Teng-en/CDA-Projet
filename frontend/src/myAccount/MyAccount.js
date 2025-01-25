import myAccountClasses from "./MyAccount.module.css";
import {Document, Packer, Paragraph, TextRun, AlignmentType} from "docx";
import React, {useState, useEffect, useContext} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";

const MyAccount = () => {
    const [user, setUser] = useState(null); //etat user connecté
    const [isEditing, setIsEditing] = useState({
        name: false,
        firstName: false,
        email: false,
        username: false,
        password: false,
    });
    const [showPassword, setShowPassword] = useState(false);
    const [editedUser, setEditedUser] = useState({});
    const navigate = useNavigate();
    const {token} = useContext(AuthContext);

    //recuperer user connecté depuis LocalStorage
    useEffect(() => {
        (async function () {
            try {
                console.log(token);
                const informations = await fetch("http://localhost:4005/auth/me", {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    credentials: "include",
                });
                const userData = await informations.json();

                console.log(userData);

                setUser(userData);
            } catch (error) {
                alert(error.message);
            }
        })();

    }, []);

    //gerer les changements d'entrée
    const inputChangeHandler = (e) => {
        const {name, value} = e.target;
        setEditedUser((prev) => ({...prev, [name]: value}));
    };

    //save les modifications
    const saveChangesHandler = (field) => {
        const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
        const updatedUsers = storedUsers.map((u) =>
            u.username === user.username ? {...user, ...editedUser} : u
        );
        localStorage.setItem("users", JSON.stringify(updatedUsers));
        setUser(editedUser); //MAJ etat user
        setIsEditing((prev) => ({...prev, [field]: false})); //desactiver edition
    };

    async function isLogged() {
        const token = localStorage.getItem('token');

        if (!token) {
            return false; // Pas de token, utilisateur non connecté
        }

        try {
            const response = await fetch('http://localhost:4005/api/verifier-token', {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!response.ok) {
                throw new Error('Token invalide');
            }

            const data = await response.json();
            return data.valide; // Retourne true si le token est valide
        } catch (error) {
            console.error('Erreur de validation du token :', error);
            return false;
        }
    }

// Exemple d'utilisation
    isLogged().then(estValide => {
        if (estValide) {
            console.log('Utilisateur connecté');
        } else {
            console.log('Utilisateur non connecté');
        }
    });

    //basculer la visibilité du password
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    //se déconnecter
    const logoutHandler = () => {
        localStorage.removeItem("loggedInUser");
        navigate("/seconnecter"); //rediriger page connexion
    };

    //supprimer compte
    const deleteAccountHandler = async (userId) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer votre compte ?")) {
            try {
                console.log(userId);
                const response = await fetch(`http://localhost:4005/auth/${userId}`, {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    credentials: "include",
                });

                if (response.ok) {
                    alert("Compte supprimé avec succès.");
                    navigate("/connexion");
                } else {
                    const errorData = await response.json();
                    alert(errorData.message || "Une erreur est survenue.");
                }
            } catch (error) {
                alert(error.message);
            }
        }
    };

    //fonction pour générer le fichier Word
    const generateWordFile = () => {
        const doc = new Document({
            sections: [
                {
                    properties: {},
                    children: [
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: "Mes Données Utilisateur",
                                    bold: true,
                                    size: 32,
                                }),
                            ],
                        }),
                        new Paragraph({
                            children: [new TextRun(`Email : ${user.email}`)],
                        }),
                        new Paragraph({
                            children: [new TextRun(`Nom d'utilisateur : ${user.username}`)],
                        }),
                    ],
                },
            ],
        });

        Packer.toBlob(doc).then((blob) => {
            const link = document.createElement("a");
            link.href = URL.createObjectURL(blob);
            link.download = "user_data.docx"; // Nom du fichier téléchargé
            link.click();
        });
    };

    return (
        <>
            <div className={myAccountClasses.myAccount}>
                <h1>Mon compte</h1>
                {user ? (
                    <div className={myAccountClasses.userInfo}>
                        {/* username */}
                        <p>
                            Nom : {""}
                            {isEditing.username ? (
                                <>
                                    <input
                                        type="text"
                                        name="name"
                                        value={editedUser.username}
                                        onChange={inputChangeHandler}
                                    />
                                    <button onClick={() => saveChangesHandler("username")}>
                                        />
                                    </button>
                                </>
                            ) : (
                                <>
                                    {user.username}
                                    {""}
                                    <button
                                        onClick={() =>
                                            setIsEditing((prev) => ({...prev, username: true}))
                                        }
                                    >
                                    </button>
                                </>
                            )}{" "}
                        </p>

                        {/* Email */}
                        <p>
                            Email : {""}
                            {isEditing.email ? (
                                <>
                                    <input
                                        type="text"
                                        name="email"
                                        value={editedUser.email}
                                        onChange={inputChangeHandler}
                                    />
                                    <button onClick={() => saveChangesHandler("email")}>
                                    </button>
                                </>
                            ) : (
                                <>
                                    {user.email}
                                    <button
                                        onClick={() =>
                                            setIsEditing((prev) => ({...prev, email: true}))
                                        }
                                    >
                                    </button>
                                </>
                            )}
                        </p>

                        {/* Mot de passe */}
                        <p>
                            Mot de passe : {""}
                            {isEditing.password ? (
                                <>
                                    <input
                                        type="text"
                                        name="password"
                                        value={editedUser.password}
                                        onChange={inputChangeHandler}
                                    />
                                    <button onClick={() => saveChangesHandler("password")}>
                                    </button>
                                </>
                            ) : (
                                <>
                                    {showPassword ? user.password : "••••••••"}
                                    <button
                                        className={myAccountClasses.iconStyleButton}
                                        onClick={togglePasswordVisibility}
                                    >
                                        {showPassword ? (
                                            <img src="../media/eyeOpen.png"/>
                                        ) : (
                                            <img src="../media/eyeClosed.png"/>
                                        )}
                                    </button>
                                    <button
                                        onClick={() =>
                                            setIsEditing((prev) => ({...prev, password: true}))
                                        }
                                    >
                                        <img src="../media/pen.png" className={myAccountClasses.iconStyle}/>
                                    </button>
                                </>
                            )}{" "}
                        </p>

                        <div className={myAccountClasses.buttonSection}>
                            <div className={myAccountClasses.buttonGroup}>
                                <button
                                    onClick={logoutHandler}
                                >
                                    Se déconnecter
                                </button>
                                <button
                                    onClick={() => deleteAccountHandler(user.id)}
                                >
                                    Supprimer mon compte
                                </button>
                            </div>
                            <button
                                onClick={generateWordFile}
                            >
                                Extraire mes données
                            </button>
                        </div>
                    </div>
                ) : (
                    <p>Aucun utilisateur connecté</p> //message si aucun user connecté
                )}
            </div>
        </>
    );
};
export default MyAccount