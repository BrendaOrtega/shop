import React, { Component } from 'react';
import {ContactoDisplay} from './ContactoDisplay';
import './Contacto.css';
import Nav from '../nav/Nav';

class Contacto extends Component {
    render() {
        return (
            <div >
                <Nav />
                <ContactoDisplay />
            </div>
        );
    }
}

export default Contacto;
