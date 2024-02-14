import React from 'react';
import styled from 'styled-components';

const ProjectCardContainer = styled.div`
    /* Estilos do cartão */
    background-color: #333;
    border-radius: 10px;
    width: 550px;
    height: 270px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.8);
    
    @media (max-width: 768px) {
        flex-direction: column;
        height: 450px;
        width: 350px;
    }
`;

const Description = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .h2 {
        font-size: 32px;
        color: #fff;
    }
    .Desc{
        color: var(--cinza);
        font-size: 14px;
        margin-bottom: 1px;
    }
    
`;

const Img = styled.div`
    position: relative;
    background-color: #333;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    min-width: 300px;
    height: 100%;
    align-self: center;
    overflow: hidden;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;

    @media (max-width: 768px) {
        max-width: 350px;
        border-top-right-radius: 10px;
        border-bottom-left-radius: 0;
        filter: blur(3px);
    }

    &:hover {
        .overlay {
            opacity: 0.5; /* Ajuste a opacidade conforme necessário */
        }
    }

    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 50, 0.5); /* Azul escuro com 50% de opacidade */
        z-index: 2;
        transition: opacity 0.3s ease;
    }

    img {
        position: relative;
        z-index: 1;
        width: 100%;
        height: 100%;
        object-fit: cover;
        filter: blur(1.5px);
        transition: filter 0.3s ease;
        &:hover {
            filter: blur(0);
            transition: filter 0.3s ease;
        }
    }
`;



const TecnologiasContainer = styled.div`
    border-radius: 0 10px 10px 0;
    padding: 2px;
    display: flex;
    flex-wrap: wrap; 
`;

const Tecnologia = styled.span`
    background-color: #AAA;
    Font-size: 12px;
    border-radius: 15px;
    padding: 5px 10px;
    margin-right: 10px;
    margin-bottom: 5px; 
    word-wrap: break-word; 
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Button = styled.a`
    font-size: 12px;
    background-color: var(--azul-escuro);
    width: 40%;
    margin-right: 5px;
    margin-top: 0px;    
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 10px 20px;
    text-decoration: none;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s ease;
    &:hover {
        background-color: #006989;
    }
`;

const ProjectCard = ({ img, Titulo, Tecnologias, Descricao, codigoLink, deployLink }) => {
    const tecnologiasArray = Tecnologias.split(',');
    
    return (
        <ProjectCardContainer>
            <Img>
                <img src={img} alt={Titulo} />
                <div className="overlay"></div>
            </Img>
            <Description>
                <div>
                    <h2 className="h2" style={{ margin: '0 0 10px' }}>{Titulo}</h2>
                    <TecnologiasContainer>
                        {tecnologiasArray.map((tecnologia, index) => (
                            <Tecnologia key={index}>{tecnologia.trim()}</Tecnologia>
                        ))}
                    </TecnologiasContainer>
                    <p className='Desc'>{Descricao}</p>
                </div>
                <ButtonContainer>
                    <Button href={codigoLink} target="_blank">Código</Button>
                    <Button href={deployLink} target="_blank">Deploy</Button>
                </ButtonContainer>
            </Description>
        </ProjectCardContainer>
    );
};

export default ProjectCard;
