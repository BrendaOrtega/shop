import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import {Routes} from './Routes';
import './App.css';


class App extends Component {
    render() {
        return (
            <div>
                <Routes />
            </div>
        );
    }
}

export default App;