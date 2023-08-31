import React from "react";
import styles from "./SessionTwo.module.css";
import Front from "./Front.png";
import Back from "./Back.png";
import Card from "../Card/Card";
import Database from "./Dababase.png"

function SessionTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
    <h1>INTRODUÇÃO</h1>
    <h1>JORNADA DEV</h1>
    <p className={styles.about}>
        Olá! É um prazer me apresentar a você. Minha paixão pela tecnologia e pelo desenvolvimento é o motor que impulsiona minha jornada.
        Minha caixa de ferramentas abrange uma ampla gama de linguagens de programação, refletindo minha busca incessante por conhecimento. De PHP a CSS, de JAVA a C#, de C a SQL, cada linguagem é uma peça no quebra-cabeça do meu desenvolvimento contínuo. Além disso, tenho um conhecimento em Laravel e React como demontro em alguns projetos no GitHub, o que me permite explorar projetos web de maneira mais dinâmica e eficiente.
        Além de minha busca autodidata, estou comprometido com minha formação acadêmica, cursando Sistemas de Informação na UNIUBE. A sala de aula expande meus horizontes e fornece uma base sólida para as teorias que aplico na prática.
        Reconheço que o campo da tecnologia é dinâmico e em constante evolução. Portanto, estou sempre um passo à frente, buscando cursos e treinamentos que me mantenham atualizado sobre as tendências mais recentes e as inovações que moldam nosso setor.
        Cada desafio é uma oportunidade de crescimento. Estou pronto para mergulhar em novas empreitadas, expandir meus conhecimentos e transformar obstáculos em degraus para o sucesso. Minha jornada na tecnologia está apenas começando, e estou ansioso para o que o futuro reserva.
    </p>
</div>

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

export default SessionTwo;

