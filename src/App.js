import React from 'react';
import './App.css';

function App() {
  return (
    <>
      <label htmlFor="banaan-slider">
      <input
        type="range"
        name="banaan"
        id="banaan-slider"
        min="0"
        max="10"
      />

        Hoeveelheid bananen
      </label>
    </>
  );
}

export default App;
