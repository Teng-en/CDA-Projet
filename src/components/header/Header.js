import classes from './Header.module.css'
import logo from '../../media/SO_logo-removebg-preview.png'
import account from '../../media/account_icon.png'

function Header() {
    return (
        <header className={classes.header}>
            <div className={classes.top}>
                <img className={classes.logo} src={logo} alt="logo SO."/>
                <img className={classes.account} src={account} alt={"icone compte"}/>
            </div>
            <div className={classes.middle}>
                <h1 className={classes["header-title"]}>Sous l'Ocean<em>.</em></h1>
                <p className={classes["header-subtitle"]}>Bienvenue Sous L’océan, où vous plongerez dans des articles et
                    des
                    fun facts fascinants sur la vie marine et ses mystères.</p>
            </div>
            <div className={classes.searchbar}></div>
        </header>
    )
}

export default Header