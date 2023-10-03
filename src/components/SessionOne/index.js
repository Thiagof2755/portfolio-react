import React from "react";
import styles from "./SessionOne.module.css";
import FaceImage from "./Face.png";
function SessionOne() {
    return (
        //container
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>OLA MEU NOME É</h1>
                <h1>THIAGO ALVES</h1>
                <h2>Transformando linhas de código em experiências digitais memoráveis</h2>
                    
            </div>
            <div className={styles.face}>
                        <img src={FaceImage}  width="420px" height="420px%" alt="face" />
            </div>
            
        </div>
    );
}

export default SessionOne;
