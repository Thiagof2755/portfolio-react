import React from "react"; // Certifique-se de importar o React

import Navbar from "../../components/Navbar/index";
import SessionOne from "../../components/SessionOne/index";
import SessionTwo from "../../components/SessionTwo/index";
import Sessionthree from "../../components/Sessionthree/index";

function Inicio() {
    return (
        <>
            <Navbar />
            <SessionOne />
            <SessionTwo />
            <Sessionthree />
        </>
    );
}

export default Inicio;
