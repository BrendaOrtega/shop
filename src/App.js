import React, { Component } from 'react';
import {Routes} from './Routes';
import './App.css';
import Footer from './components/footer/Footer';
import Alert from 'react-s-alert';


class App extends Component {
    render() {
        return (
            <div>
                <Routes />
                <Footer />
                <Alert stack={{limit: 10}} html={true}/>
            </div>
        );
    }
}

export default App;