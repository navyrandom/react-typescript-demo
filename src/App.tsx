import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Greet } from './components/Greet';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Greet name='Vy' messagesCount={40} loggedIn={false} />
      </header>
    </div>
  );
}

export default App;
