import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './Extras.css';
import Travel from '../home/common/Travel';
import Bolsa from '../../assets/bolsa.png';
import Nav from '../nav/Nav';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';


class Extras extends Component {
    render() {
        return (
            <div >
                <Nav />

                <div className="extra">

                    <h2>Zonas de servicio</h2>
                    <p>Shoppy ofrece servicio inmediato en las siguientes colonias, si tu zona no esta en esta lista puedes ponerte en contacto con nosotros y seguramente podemos hacerte una entrega especial </p>
                    <div className="flex">
                        <div className="marker">
                            <h3><FontAwesome name='map-marker' className="icon_about" size='1x'/> Pachcua de Soto</h3>
                            <div className="flex">
                                <div className="flex_box">
                                    <p><FontAwesome name='map-pin' size='1x'/> Amp. López Mateos</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Amp. Felipe Ángeles</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Aquiles Serdán</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Arboledas de San Javier</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Bonanza</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Bosques del Peñar</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Blvrs. de San Fco</p>
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
                                <div className="flex_box">
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
                                <div className="flex_box">
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
                            <div className="flex">
                                <div className="flex_box">
                                    <p><FontAwesome name='map-pin' size='1x'/> 11 de Julio</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Álamo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Álamo Rustico</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Amaque</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Arboledas de Pachua</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Bosques del Mineral</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Campestre Villas del Álamo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> CANACINTRA</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Carboneras</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Ceuni</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Colinas de Plata</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> CTM</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Ampliación el Saucillo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> El Chacón</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> El Saucillo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> El Venado</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Felipe Ángeles</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Forjadores</p>
                                </div>
                                <div className="flex_box">
                                    <p><FontAwesome name='map-pin' size='1x'/> Hacienda Margarita</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> La Colonia</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> La Reforma</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Los Cedros</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Los Cipreses</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Los Pinos</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Los Tuzos</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Mineral de la Reforma</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Minerva</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Pachuquilla</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Paseo de las Reynas</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> PRI Chacón</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Privada Camino Real</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Privada del Álamo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Privada de San Javier</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Quinta Bonita</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Rinconada del Álamo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> San Carlos</p>
                                </div>
                                <div className="flex_box">
                                    <p><FontAwesome name='map-pin' size='1x'/> Tulipanes</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Unidad de la Calera</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Valle del Álamo</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Valle Dorado</p>
                                    <p><FontAwesome name='map-pin' size='1x'/> Villas del Álamo</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Travel />

                <div className="extras">
                    <h2>Preguntas Frecuentes</h2>
                    <div>
                        <hr className="division"/>
                        <h3>¿Cuándo esta disponible Shoppy?</h3>
                        <p>Shoppy esta disponible los 7 días de la semana</p>
                        <h3>¿En dónde esta disponible Shoppy?</h3>
                        <p>Por ahora nos encontramos en Pachuca de Soto y Mineral de la Reforma, Hidalgo.
                            Para consultar las colonias de servicio ve al apartado de zonas de servicio</p>
                        <h3>¿Cómo comienzo a usar Shoppy? </h3>
                        <p>Es muy sencillo! </p>
                        <p>1. Desacarga la app (Android o IOS)</p>
                        <p>2. Completa tu información de entrega</p>
                        <p>3. Elige los productos que necesitas</p>
                        <p>4. Haz tu pedido! </p>
                        <h3>¿Cuánto cuesta el envío en Shoppy? </h3>
                        <p>Las tarifas de envío varian dependiendo la zona en donde te encuentres, pero no te preocupes,
                        cuando hagas tu pedido el costo aparecerá</p>
                        <h3>¿Qué hago si tengo un problema con mi pedido?</h3>
                        <p>Nuestro principal objetivo es ofrecerte el mejor servicio. Así que solo contacta a nuestro equipo vía teléfonica,
                            email o por medio de nuestras redes sociales y te apoyaremos</p>
                        <h3>¿Tengo que darle propina al repartidor?</h3>
                        <p>Las propinas no se incluyen, no se esperan ni son requeridas. Pero si has recibido un buen servicio, puedes premiarlo.</p>
                        <h3>¿Puedo pagar con tarjeta?</h3>
                        <p>Próximamente implementaremos esta opción de pago, por ahora el pago es a contra entrega.</p>
                        <hr className="division"/>
                        <div className="img_ask">
                            <img src={Bolsa} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Extras;