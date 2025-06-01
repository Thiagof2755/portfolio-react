import React from "react";
import styles from "./SessionOne.module.css";
import FaceImage from "./Face.png";
import BtnScroll from "../BtnScroll/index";

function SessionOne() {
    return (
        <div className={styles.container}>
            <div className={styles.space}>
                <div className={styles.box}>
                    <h1>OLÁ, EU SOU</h1>
                    <h1>THIAGO ALVES</h1>
                    <h2>Desenvolvedor apaixonado por criar soluções digitais inovadoras</h2>
                </div>
                <div className={`${styles.face} ${styles.shadow}`}>
                    <div className={styles.faceContainer}>
                        <img src={FaceImage} alt="Face" className={styles.faceImage} />
                    </div>
                </div>
            </div>
            <div className={styles.btnContainer}>
                <BtnScroll />
            </div>
        </div>
    );
}

export default SessionOne;
