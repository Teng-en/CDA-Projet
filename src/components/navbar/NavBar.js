import classNavbar from './NavBar.module.css'

function NavBar(){
  return(
      <nav className={classNavbar.navbar}>
        <ul className={classNavbar["navbar-menu"]}>
            <li><a href="#">Actualités</a></li>
            <li><a href="#">Animaux Marins</a></li>
            <li><a href="#">Biodiversité</a></li>
        </ul>
    </nav>
  )
}

export default NavBar