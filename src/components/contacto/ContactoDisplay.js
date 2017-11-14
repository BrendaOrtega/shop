import React from 'react';
import logo from '../../assets/shopyy.png';
import Btn from '../home/common/Btn';

export const ContactoDisplay = () => {
    return (

            <div className='contacto'>

                <div className='back_form'>


                        <div className='contenido'>
                            <h3 className='saludo'>Hola!</h3>
                            <p className='mensaje'>¿Tienes alguna pregunta o comentario? Completa por favor el formulario y nos pondremos en contacto contigo.</p>
                            <div>
                                <form method="post" action="." className='recuadro' name="sentMessage" id="contactForm">

                                    <div >

                                        <div className='datos'>
                                            <input name="nombre" type="name" className="formas form-control" placeholder=" Nombre " id="nombre" required data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger"></p>


                                            <input name="estado" type="estado" className="formas lefs form-control" placeholder="Estado " id="estado" required data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <p className="help-block text-danger"></p>

                                        <div className='datos'>
                                            <input name="email" type="email" className="formas form-control" placeholder=" Email " id="email" required data-validation-required-message="Please enter your email address." />
                                            <p className="help-block text-danger"></p>


                                            <input name="tel" type="tel" className="formas lefs form-control" placeholder="Teléfono " id="phone" required data-validation-required-message="Please enter your phone number." />
                                            <p className="help-block text-danger"></p>
                                        </div>
                                        <p className="help-block text-danger"></p>
                                    </div>

                                    <p className="help-block text-danger"></p>

                                    <textarea placeholder="Mensaje" className="forms"></textarea>
                                    <p className="help-block text-danger"></p>


                                    <Btn text="Enviar"/>

                                </form>
                            </div>
                        </div>
                    </div>



            </div>
            

    );
}
