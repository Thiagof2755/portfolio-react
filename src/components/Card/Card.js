import React from 'react';
import './Card.css';

const Card = ({ title, imageSrc, content }) => {
    return (
    <div className="card">
    <div className="face face1">
        <div className="content">
        <img src={imageSrc} alt={title} />
        <h3>{title}</h3>
        </div>
    </div>
    <div className="face face2">
        <div className="content">
        <p>{content}</p>
        <a href="https://github.com/Thiagof2755">Saiba Mais</a>
        </div>
    </div>
    </div>
);
};

export default Card;
