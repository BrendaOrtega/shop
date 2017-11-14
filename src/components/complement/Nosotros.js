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
                    <div className="fix">
                        <div className="box">
                            <div className="tarjeta">
                                <h3>¿Qué es Shoppy?</h3>
                                <p>Shoppy es una nueva forma de hacer las compras del súper, fácil, rápido y accesible. </p>
                            </div>
                        </div>
                        <div className="box dos">


                        </div>
                    </div>
                    <div className="fix">
                        <div className="box dos">

                        </div>
                        <div className="box">
                            <div className="tarjeta ">

                                <p className="margencin"> Shoppy nace con el fin de ayudar a estudiantes,
                                    madres de familia, emprendedores y público en general a
                                    llevar las compras de súper a su domicilio de forma rápida y simple. </p>
                            </div>
                        </div>

                    </div>
                    <div className="fix">
                        <div className="box">
                            <div className="tarjeta ">

                                <p className="margencin">Trabajamos contigo los <span className="spa" style={{color:"#8E1C58"}}>365 días del año.</span> Realizando tus compras como si tu las hicieras, buscando precio y calidad en cada uno de los productos. </p>
                            </div>
                        </div>
                        <div className="box dos">

                        </div>
                    </div>


                </div>
            </div>
            </div>
        );
    }
}

export default Nosotros;
