import React from "react"; // Certifique-se de importar o React

import Navbar from "../../components/Navbar/index";
import SessionOne from "../../components/SessionOne/index";
import SessionTwo from "../../components/SessionTwo/index";

function Inicio() {
    return (
        <>
            <Navbar />
            <SessionOne />
            <SessionTwo />
        </>
    );
}

export default Inicio;
