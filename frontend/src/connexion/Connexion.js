import connexionClasses from './Connexion.module.css';
import {useState, useContext} from 'react';
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../contexts/AuthContext";

function Connexion() {

    const [mailConnexion, setMailConnexion] = useState("");
    const [passwordConnexion, setPasswordConnexion] = useState("");
    const [email, setEmail] = useState("")
    const [mailInscription, setMailInscription] = useState("");
    const [passwordInscription, setPasswordInscription] = useState("");

    const {signIn} = useContext(AuthContext)

    const mailConnexionChangeHandler = (e) => {
        setMailConnexion(e.target.value);
    }
    const passwordConnexionChangeHandler = (e) => {
        setPasswordConnexion(e.target.value)
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const mailInscriptionChangeHandler = (e) => {
        setMailInscription(e.target.value);
    }
    const passwordInscriptionChangeHandler = (e) => {
        setPasswordInscription(e.target.value)
    }

    const navigate = useNavigate()

    const submitHandlerLogin = async (e) => {
        e.preventDefault();
        try {
            signIn(mailConnexion, passwordConnexion)
            navigate("/news")
        } catch (error) {
            alert(error.message || "Une erreur est survenue")
        }
    };

    const submitHandlerRegister = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:4005/auth/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials : "include",
                body : JSON.stringify({
                    mail : emailChangeHandler,
                    username : mailInscription,
                    password : passwordInscription
                })
            });

            if (!response.ok) {
                const error = await response.json()
                throw new Error(error.message || "Erreur lors de la connexion");
            }

            const data = await response.json();
            alert(data.message || "Connexion réussie")
            navigate("/news")
        } catch (error) {
            alert(error.message || "Une erreur est survenue")
        }
    };

    return (
        <div className={connexionClasses.forms}>
            <form onSubmit={submitHandlerLogin}>
                <div className={connexionClasses.connexion}>
                    <h1>Connexion</h1>
                    <label>Nom d'utilisateur :</label>
                    <input type="text" value={mailConnexion} onChange={mailConnexionChangeHandler}/>
                    <label>Mot de passe</label>
                    <input type="password" value={passwordConnexion} onChange={passwordConnexionChangeHandler}/>
                    <div>
                        <button type='Submit'>Envoyer</button>
                    </div>
                </div>
            </form>

            <form onSubmit={submitHandlerRegister}>
                <div className={connexionClasses.inscription}>
                    <h1>Inscription</h1>
                    <label>Nom d'utilisateur :</label>
                    <input type="text" value={mailInscription} onChange={mailInscriptionChangeHandler}/>
                    <label>Email :</label>
                    <input type="mail" value={email} onChange={emailChangeHandler}/>
                    <label>Mot de passe</label>
                    <input type="password" value={passwordInscription} onChange={passwordInscriptionChangeHandler}/>
                    <div>
                        <button type='Submit'>Envoyer</button>
                    </div>
                </div>
            </form>
        </div>


    );
}

export default Connexion;