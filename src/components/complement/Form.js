import React, { Component } from 'react';
import './Form.css';


class Nosotros extends Component {
    render() {
        return (
            <div className="form">
                <h4>Regístrate</h4>
                <form  >
                    <label htmlFor="">
                        <input name="nombre" placeholder="Nombre" type="text" />
                    </label>
                    <label htmlFor="">
                        <input name="email"  placeholder="Email" type="email" />
                    </label>
                    <label htmlFor="">
                        <input name="tel"  placeholder="Teléfono" type="tel" />
                    </label>
                    <label htmlFor="">
                        <input name="zona"  placeholder="Zona" type="text" />
                    </label>

                    <input className="btn" type="submit"/>

                </form>
            </div>
        );
    }
}

export default Nosotros;
