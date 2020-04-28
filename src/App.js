import React from 'react';
import './App.css';
import Bordered from './components/Bordered';
import Tabs from './components/Tabs';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1> props.children demo </h1>
            </header>
            <main>
                <Tabs headers={['Flik 1', 'Flik 2', 'Flik 3', 'Flik 4']}>
                    <div> content 1 </div>
                    <div> content 2 </div>
                    <div> content 3 </div>
                    <div> content 4 </div>
                </Tabs>

                <Tabs headers={['Fotboll', 'League of legends', 'Badminton']}>
                    <div> fussball </div>
                    <div> much lol </div>
                    <div> bad min ton </div>
                </Tabs>

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
