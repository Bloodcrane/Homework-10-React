import React from 'react';
import './App.css';
import image from './assets/beatles.jpg';

function App() {
  return (
    <div className="container">
      <header>
        <h1>The Beatles</h1>
      </header>
      <div className="image-container">
        <img src={image}/>
      </div>
    </div>
  );
}

export default App;
