import './App.css';
import NavBar from './components/navbar/NavBar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import {Outlet} from "react-router-dom";

function AppLayout() {
  return (
    <>
        <Header/>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  );
}

export default AppLayout;
