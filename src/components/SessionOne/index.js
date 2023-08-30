import React from "react";
import { Link } from "react-router-dom";
import styles from "./SessionOne.module.css";

function SessionOne() {
    return (
        //container
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>OLA MEU NOME É</h1>
                <h1>THIAGO ALVES</h1>
                <h2>Transformando linhas de código em experiências digitais memoráveis</h2>
            </div>
        </div>
    );
}

export default SessionOne;
