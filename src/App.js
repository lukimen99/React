import React from 'react';
import './App.css';
import Forecast from "./components/Forecast/Forecast";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pogodynka</h1>
      </header>
      <main>
        <Forecast />
      </main>
      <footer>
        Made by Hubert Marchwat
      </footer>
    </div>
  );
}

export default App;
