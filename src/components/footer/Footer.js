import FooterClasses from './Footer.module.css'
import logo from '../../media/SO_logo-removebg-preview.png'

function Footer() {

    return (
        <footer className={FooterClasses.footer}>
            <div className={FooterClasses.clickable}>
                <div>
                    <h3>NOUS CONTACTER</h3>
                    <a href={"mailto:tara.culminique@gmail.com"} target={"_blank"}>inserer adresse mail</a>
                </div>
                <div>
                    <h3>SE CONNECTER</h3>
                    <a>Créer un compte</a>
                </div>
            </div>
            <div className={FooterClasses.Copyrights}>
                <p>Copyrights © Sous l'Océan 2024. All rights reserved</p>
                <img className={FooterClasses.logo} src={logo} alt="logo SO."/>
            </div>
        </footer>
    )
}

export default Footer