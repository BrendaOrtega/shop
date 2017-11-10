import React from 'react';
import Slide from './common/Slide';
import About from './common/About';
import Publi from './common/Publi';
import Categorias from './common/Categorias';
import Public from './common/Public';
import Info from './common/Info';


export const HomeDisplay = () => {
    return (
            <div className="Home">
                <Slide />
                <About />
                <Publi />
                <Categorias />
                <Public />
                <Info />

            </div>
            );
    }
