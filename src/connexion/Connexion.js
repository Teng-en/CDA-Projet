import connexionClasses from './Connexion.module.css';
import {useState} from 'react';

function Connexion() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("")

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value);
    }
    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("Nom d'utilisateur soumis :", username);
    };

    return (
        <div className={connexionClasses.forms}>
            <form onSubmit={submitHandler}>
                <div className={connexionClasses.connexion}>
                    <h2>Connexion</h2>
                    <label>Nom d'utilisateur :</label>
                    <input type="text" value={username} onChange={usernameChangeHandler}/>
                    <label>Mot de passe</label>
                    <input type="password" value={password} onChange={passwordChangeHandler}/>
                    <div>
                        <button type='Submit'>Envoyer</button>
                    </div>
                </div>
            </form>

            <form onSubmit={submitHandler}>
                <div className={connexionClasses.inscription}>
                    <h2>Inscription</h2>
                    <label>Nom d'utilisateur :</label>
                    <input type="text" value={username} onChange={usernameChangeHandler}/>
                    <label>Email :</label>
                    <input type="mail" value={email} onChange={emailChangeHandler}/>
                    <label>Mot de passe</label>
                    <input type="password" value={password} onChange={passwordChangeHandler}/>
                    <div>
                        <button type='Submit'>Envoyer</button>
                    </div>
                </div>
            </form>
        </div>


    );
}

export default Connexion;