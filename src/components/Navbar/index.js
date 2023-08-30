import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Nav from "../Nav/index";

function Navbar() {
    return (
        <header className={styles.NavBar}>    
            <Link to="/" className={styles.logo}>Logo</Link>
            <nav>
                <Nav url="/">Home</Nav>
                <Nav url="/sobre">Sobre</Nav>
                <Nav url="/projetos">Projetos</Nav>
                <Nav url="/contatos">Contatos</Nav>
            </nav>
        </header>
    );
}

export default Navbar;
