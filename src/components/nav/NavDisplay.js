import React from 'react';
import logo from '../../assets/shopy.png';
import {Link} from 'react-router-dom';

export const NavDisplay = () => {
    return (
        <div className="nav">
                <Link to="/">
                    <img src={logo} alt=""/>
                </Link>
                <button>Pedir ahora</button>

        </div>
    );
}
