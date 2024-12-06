import connexionClasses from './Connexion.module.css';
import {useState} from 'react';

function Connexion() {

    const [usernameConnexion, setUsernameConnexion] = useState("");
    const [passwordConnexion, setPasswordConnexion] = useState("");
    const [email, setEmail] = useState("")
    const [usernameInscription, setUsernameInscription] = useState("");
    const [passwordInscription, setPasswordInscription] = useState("");

    const usernameConnexionChangeHandler = (e) => {
        setUsernameConnexion(e.target.value);
    }
    const passwordConnexionChangeHandler = (e) => {
        setPasswordConnexion(e.target.value)
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const usernameInscriptionChangeHandler = (e) => {
        setUsernameInscription(e.target.value);
    }
    const passwordInscriptionChangeHandler = (e) => {
        setPasswordInscription(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Nom d'utilisateur soumis :", usernameInscription);
    };

    return (
        <div className={connexionClasses.forms}>
            <form onSubmit={submitHandler}>
                <div className={connexionClasses.connexion}>
                    <h1>Connexion</h1>
                    <label>Nom d'utilisateur :</label>
                    <input type="text" value={usernameConnexion} onChange={usernameConnexionChangeHandler}/>
                    <label>Mot de passe</label>
                    <input type="password" value={passwordConnexion} onChange={passwordConnexionChangeHandler}/>
                    <div>
                        <button type='Submit'>Envoyer</button>
                    </div>
                </div>
            </form>

            <form onSubmit={submitHandler}>
                <div className={connexionClasses.inscription}>
                    <h1>Inscription</h1>
                    <label>Nom d'utilisateur :</label>
                    <input type="text" value={usernameInscription} onChange={usernameInscriptionChangeHandler}/>
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