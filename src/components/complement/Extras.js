import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Extras.css';
import Travel from '../home/common/Travel';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';

class Extras extends Component {
    render() {
        return (
            <div >
                <div className="extra">
                    <h2>Zonas de servicio</h2>
                    <p>Shoppy ofrece servicio inmediato en las siguientes colonias, si tu zona no esta en esta lista puedes ponerte en contacto con nosotros y seguramente podemos hacerte una entrega especial </p>
                    <div className="flex">
                        <div className="marker">
                            <h3><FontAwesome name='map-marker' className="icon_about" size='1x'/> Pachcua de Soto</h3>
                            <div className="flex">
                                <div>
                                    <p><FontAwesome name='map-pin' size='1x'/> Ampliación López Mateos</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Ampliación Felipe Ángeles</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Aquiles Serdán</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Arboledas de San Javier</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Bonanza</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Bosques del Peñar</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Blvrs. de San Francisco</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Campo de Golf</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Campo de Tiro</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Centro</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Centro Minero</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Centro SCT Hidalgo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Cereso Pachuca</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Colosio</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Constitución</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Construplaza</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Cuesco</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Doctores</p>
                                </div>
                                <div>
                                    <p><FontAwesome name='map-pin' size='1x'/> El Arbolito</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> El Palmar</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Felipe Ángeles</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Francisco I Madero</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Geovillas de Nuevo Hgo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> ISSSTE</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Javier Rojo Gómez</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> José López Portillo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Juan C. Doria</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> La Moraleja</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> La Puerta de Hierro</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> La Surtidora</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Los Arcos</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Maestranza</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Mariano Otero</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Miguel Hidalgo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Morelos</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Nuevo Hidalgo</p>
                                </div>
                                <div>
                                    <p><FontAwesome name='map-pin' size='1x'/> Parque de Poblamiento</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Parque Hidalgo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Paseos de la Plata</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Periodista</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Piracantos</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Pitahayas</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Plutarco Elías Calles</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Punta Azul</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Real de Minas</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Revolución</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Rinconada Real de Pachuca</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> San Antonio</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> San Cayetano el Bordo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Santa Julia</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Sector Primario</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Venta Prieta</p>
                                </div>
                            </div>
                        </div>

                        <div className="marker">
                            <h3><FontAwesome name='map-marker' className="icon_about" size='1x'/> Mineral de la Reforma</h3>
                        </div>
                    </div>
                </div>
                <Travel />
                {/*<div className="extra">*/}
                    {/*<h2>Tarifas</h2>*/}
                    {/*<div  style={{textAlign:"center"}}>*/}
                        {/*<div className="tabla">*/}
                            {/*<p>Costo por distancia</p>*/}
                            {/*<div>*/}

                            {/*</div>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <div className="extra">
                    <h2>Preguntas Frecuentes</h2>
                    <div>
                        <h3>Qué es Shoppy?</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Extras;