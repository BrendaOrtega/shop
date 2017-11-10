import React, { Component } from 'react';
import './Nosotros.css';
import Nav from '../nav/Nav';

class Nosotros extends Component {
    render() {
        return (
            <div>
                <Nav />
                <div className="back">
                <div className="cubrir">
                    <div className="tarjeta">
                        <h3>¿Qué es Shoppy?</h3>
                        <p>Shoppy es una nueva forma de hacer las compras del súper, fácil, rápido y accesible. </p>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default Nosotros;
