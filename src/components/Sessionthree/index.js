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
            content="Experiente em React.JS e Vite para construir componentes reutilizáveis, consulmo de APIs e interfaces dinâmicas."
            />
            <Card 
            title="BackEnd"
            imageSrc={Back}
            content="Proficiente em Node.js e Express para desenvolvimento backend ágil e criação de API. Conhecimentos em PHP e Laravel."
            />
            <Card
            title="Database"
            imageSrc={Database}
            content="Competente em bancos de dados, como MongoDB. Habilidades em SQL para consulta eficiente de dados."
            />

            
        </div>
    </div>


    );
}

export default Sessionthree;
