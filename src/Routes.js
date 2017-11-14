import React from 'react';
import {Route} from 'react-router-dom';
import Home from './components/home/Home';
import Nosotros from './components/complement/Nosotros';
import Reclutamiento from './components/complement/Reclutamiento';
import Contacto from './components/contacto/Contacto';
import Extras from './components/complement/Extras';

export const Routes = () => (
    <div>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={Nosotros}/>
        <Route exact path="/deliver" component={Reclutamiento} />
        <Route exact path="/contacto" component={Contacto} />
        <Route path="/info" component={Extras} />
    </div>

);

