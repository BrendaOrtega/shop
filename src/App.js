import React, { Component } from 'react';
import {Routes} from './Routes';
import './App.css';
import Footer from './components/footer/Footer';


class App extends Component {
    render() {
        return (
            <div>
                <Routes />
                <Footer />
            </div>
        );
    }
}

export default App;