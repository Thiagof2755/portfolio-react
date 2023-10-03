import React from "react";
import styles from "./Sessionthree.module.css";
import Front from "./Front.png";
import Back from "./Back.png";
import Card from "../Card/Card";
import Database from "./Dababase.png"

function Sessionthree() {
    return (
        //container
    <div className={styles.container}>
    <div className={styles.cardContainer}>
            <Card className
            title="FrontEnd"
            imageSrc={Front}
            content="Minhas habilidades em linguagens como HTML, CSS e JavaScript capacitam-me a criar interfaces interativas e atraentes. Também estou à vontade com o framework React, que me possibilita construir componentes reutilizáveis e interfaces de usuário dinâmicas."
            />
            <Card 
            title="BackEnd"
            imageSrc={Back}
            content="Tenho conhecimentos em PHP, o que me permite criar lógica robusta e funcionalidades dinâmicas para aplicações web. Além disso, estou familiarizado com o framework Laravel, que agiliza o desenvolvimento ."
            />
            <Card
            title="Database"
            imageSrc={Database}
            content=" Em relação a bancos de dados, sou competente em SQL, o que me permite projetar, consultar e gerenciar dados eficientemente. Compreendo a importância do armazenamento de dados e seu impacto nas aplicações."
            />
        </div>
    </div>


    );
}

export default Sessionthree;
