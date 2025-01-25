import classes from './Header.module.css'
import logo from '../../media/SO_logo-removebg-preview.png'
import account from '../../media/account_icon.png'
import pointer from '../../media/pointer.png'
import {useNavigate} from "react-router-dom";

function Header() {

    const navigate = useNavigate()
    function navConnexion (){
        navigate("connexion")
    }

    return (
        <header className={classes.header}>
            <div className={classes.top}>
                <img className={classes.logo} src={logo} alt="logo SO."/>
                <div onClick={navConnexion} className={classes.account}>
                    <img src={account} alt={"icone compte"}/>
                </div>
            </div>
            <div className={classes.middle}>
                <span className={classes["header-title"]}>Sous l'Ocean<span>.</span></span>
                <p className={classes["header-subtitle"]}>Bienvenue Sous L’océan, où vous plongerez dans des articles et
                    des
                    fun facts fascinants sur la vie marine et ses mystères.</p>
            </div>
            <div className={classes.searchbar}>
                <img src={pointer} alt={"pointer"}/>
                <input type={'search'}></input>
            </div>
        </header>
    )
}

export default Header