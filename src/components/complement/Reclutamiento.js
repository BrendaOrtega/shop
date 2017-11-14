import React, { Component } from 'react';
import './Reclutamiento.css';
import logo from '../../assets/shopyy.png';
import Publi from '../home/common/Publi';
import Formulario from './Form';
import FontAwesome from 'react-fontawesome';
import {Link} from 'react-router-dom';

class Reclutamiento extends Component {
    render() {
        return (
            <div className="reclu">
                <div className="encabezado">
                    <div className="present">
                        <Link to ='/'>
                            <div className="rec_logo">
                                <img src={logo} alt=""/>
                            </div>
                        </Link>

                        <h2>¡Unete a nuestro equipo de shoppers!</h2>
                        <p>Gana dinero entregando pedidos en Shoppy</p>
                    </div>
                </div>
                <Publi />
                <div className="white">
                    <div className="request">

                        <div className="requisitos">
                            <h3>Sé un shopper</h3>
                            <p className="descr" >Al convertirte en shopper tu decides tu horario de trabajo, aumentarás tus ingresos, obtendras propinas sin comisión y serás parte de nuestro team. </p>
                            <h4>¿Qué necesitas?</h4>
                            <p className="option"><FontAwesome name='check' className="icon_about" size='1x'/> Identificación</p>
                            <br/>
                            <p className="option"><FontAwesome name='check' className="icon_about" size='1x'/> Licencia de Conducir</p>
                            <br/>
                            <p className="option"><FontAwesome name='check' className="icon_about" size='1x'/> Biciclieta, moto o auto</p>
                            <br/>
                            <p className="option"><FontAwesome name='check' className="icon_about" size='1x'/> Mucha actitud</p>
                        </div>
                        <div className="requisitos centre">
                            <img src="http://files.softicons.com/download/transport-icons/standard-road-icons-by-aha-soft/png/256x256/Moto%20courier.png" alt=""/>
                        </div>
                    </div>
                </div>
                <div className="registro">
                    <div className="request">
                        <div className="requisitos">
                            <h3>¿Estas listo para comenzar?</h3>
                            <p>Regístrate ahora</p>
                        </div>
                        <div className="requisitos">
                            <Formulario />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Reclutamiento;
