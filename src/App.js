import React from 'react';

import Drumpad from './components/Drumpad.js';
import ReactFCCtest from 'react-fcctest';

import './App.css';

function App() {
  return (
    <div className="App">
      <Drumpad />
      <ReactFCCtest />
    </div>
  );
}

export default App;
