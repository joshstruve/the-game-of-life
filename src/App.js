import React, { Component } from 'react';
import './style.css';
import Game from './Game';

class App extends Component {

    render() {

        return (
            <div className="container">
                <Game />
            </div>
        );
    }
}

export default App;
