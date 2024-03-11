import React from 'react';
import styled from 'styled-components';
import ProjectCard from '../ProjectCard/ProjectCard.jsx';
import DevCine from "./ImgProjects/DevCine.png";
import QuizMaster from "./ImgProjects/QuizMaster.png";
import QuizAPI from "./ImgProjects/QuizApi.png";
import Xperf from "./ImgProjects/Xperf.png";
import GitHubFinder from "./ImgProjects/Githubfinder.png"
import EmBreve from "./ImgProjects/EmBreve.png"

const SessionFiveContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10em;
    margin-bottom: 0em;
    padding: 0em 5em;

    @media (max-width: 768px) {
        margin-top: 0em;
    }
`;

const TitleContainer = styled.div`
    text-align: center;
    
`;

const Title = styled.h1`
    
    font-size: 4em;
    margin-bottom: 0.5em;
    font-family: var(--fontebebas);
    color: var(--branco);
`;

const Description = styled.p`
    font-size: 130%;
    color: var(--cinza);
    text-align: center;
    margin-bottom: -2em;
`;

const ProjectsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 3em;

    @media (max-width: 768px) {
        justify-content: center;
        gap: 1em;
        margin-bottom: 0em;
        margin-top: 0em;

    }
`;

const SessionFive = () => {
    return (
        <SessionFiveContainer>
            <TitleContainer>
                <Description>Aqui você pode conferir alguns dos projetos que realizei.</Description>
                <Title>Projetos</Title>
            </TitleContainer>
            <ProjectsContainer>
                <ProjectCard
                    img={DevCine}
                    Titulo="DevCine"
                    Tecnologias="React, API, JavaScript, styled-components"
                    Descricao="Projeto de biblioteca de filmes desenvolvido em React, utilizando a API do The Movies Database."
                    codigoLink="https://github.com/Thiagof2755/movies-react-tmdb"
                    deployLink="https://movies-react-tmdb.vercel.app/"
                />
                <ProjectCard
                    img={QuizMaster}
                    Titulo="QuizMaster"
                    Tecnologias="React, API, JavaScript, Vite "
                    Descricao="Um Quiz desenvolvido em React com Vite que oferece uma experiência de gamificação para os usuários testarem seus conhecimentos."
                    codigoLink="https://github.com/Thiagof2755/QuizMaster-React"
                    deployLink="https://quiz-master-react.vercel.app/"
                />
                <ProjectCard
                    img={QuizAPI}
                    Titulo="Quiz  API"
                    Tecnologias="Node.js, Express.js, MongoDB, JavaScript "
                    Descricao="Uma API Node.js para criar e gerenciar perguntas e respostas de quiz. Utilizando Express.js e MongoDB foi feita para ser consumida por um projeto maior."
                    codigoLink="https://github.com/Thiagof2755/QuizMaster-API-NodeJS"
                    deployLink="https://quiz-master-api-node-js.vercel.app/"
                />
                <ProjectCard
                    img={GitHubFinder}
                    Titulo="Git-Hub Finder "
                    Tecnologias="React, TypeScript, Sass, Vite, Api "
                    Descricao="Um Projeto que usuarios podem pesquisar por nomes de usuário do GitHub e acessar informações detalhadas."
                    codigoLink="https://github.com/Thiagof2755/GitHubFinder-React-Ts"
                    deployLink="https://git-hub-finder-react-ts.vercel.app/"
                />
                <ProjectCard
                    img={Xperf}
                    Titulo="Xperf"
                    Tecnologias="Python, MySQL, Grafana"
                    Descricao="O Xperf é uma aplicação para coleta e análise eficiente de informações de desempenho de redes. Ele permite testes, monitoramento e avaliação da estabilidade e velocidade da rede de forma centralizada."
                    codigoLink="https://github.com/Thiagof2755/Xperf"
                    deployLink="https://github.com/Thiagof2755/Xperf"
                />
                <ProjectCard
                    img={EmBreve}
                    Titulo="Em Breve"
                    Tecnologias="...Novidade,...Novidade"
                    Descricao="Em Breve novidades vem ai, acompanhe meu Linkedin e fique sabendo o quanto antes"
                    codigoLink="https://github.com/Thiagof2755"
                    deployLink="https://github.com/Thiagof2755"
                />

            </ProjectsContainer>
        </SessionFiveContainer>
    );
}

export default SessionFive;
