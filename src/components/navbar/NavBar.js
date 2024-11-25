import classNavbar from './NavBar.module.css'
import {Link} from "react-router-dom";

function NavBar(){
  return(
      <nav className={classNavbar.navbar}>
        <ul className={classNavbar["navbar-menu"]}>
            <Link to="news">Actualités</Link>
            <li><a href="#">Animaux Marins</a></li>
            <li><a href="#">Biodiversité</a></li>
        </ul>
    </nav>
  )
}

export default NavBar