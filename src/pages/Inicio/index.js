import React from "react";
import Navbar from "../../components/Navbar/index";
import SessionOne from "../../components/SessionOne/index";
import SessionTwo from "../../components/SessionTwo/index";
import Sessionthree from "../../components/Sessionthree/index";
import styles from "./inicio.module.css";



function Inicio() {
    return (
        <div className={styles.container}>
        <>
            <Navbar />
            <SessionOne />
            <SessionTwo />
            <Sessionthree />

            
        </>
        </div>
    );
}

export default Inicio;
