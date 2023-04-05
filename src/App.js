import React, { Component } from 'react';
import './style.css';
import Game from './Game';

class App extends Component {

    render() {

        return (
            <main className="App container-fluid crt p-0">
                <div className="vh-100 img-bg">
                    <div className="row">
                        <Game />
                    </div>
                </div>
            </main>
        );
    }
}

export default App;
