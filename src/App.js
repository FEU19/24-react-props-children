import React from 'react';
import './App.css';
import Bordered from './components/Bordered';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1> props.children demo </h1>
            </header>
            <main>
                <Bordered>
                    Hello!
                </Bordered>

                <Bordered>
                    <ul>
                        <li> äpple </li>
                        <li> päron </li>
                        <li> vindruvor </li>
                    </ul>
                </Bordered>
            </main>
        </div>
    );
}

export default App;
