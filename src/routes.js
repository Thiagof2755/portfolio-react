// router.js
import React from 'react';
import { HashRouter as BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/index';

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Inicio />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
