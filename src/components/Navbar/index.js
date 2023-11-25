// Navbar.js

import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import Nav from "../Nav/index";
import Git from "./Git.png";
import Instagram from "./Instagram.png";
import Linkedin from "./Linkedin.png";
import Whatsapp from "./Whatsapp.png";

function Navbar() {
    return (
        <header className={styles.NavBar}>    
            <Link to="/" className={styles.logo}>Thiago.Dev</Link>
            <nav className={styles.icons}>
                <Nav url="https://github.com/Thiagof2755" external><img src={Git} alt="GitHub" /></Nav>
                <Nav url="https://www.linkedin.com/in/thiago-alves-396108209/" external><img src={Linkedin} alt="LinkedIn" /></Nav>
                <Nav url="https://www.instagram.com/thiago__life" external><img src={Instagram} alt="Instagram" /></Nav>
                <Nav url="https://wa.me/5534997628585" external><img src={Whatsapp} alt="WhatsApp" /></Nav>
            </nav>
        </header>
    );
}

export default Navbar;
