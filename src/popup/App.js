import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import Router from './Router';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Navbar</h1>
          <Router/>
      </header>
    </div>
  );
}

export default App;
