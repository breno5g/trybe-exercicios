import React, { useState } from 'react';
import TrafficSignal from './TrafficSignal';
import './App.css';
import Cars from './Cars';
import MyContext from './MyContext';

function App() {
  const [signalColor, setSignalColor] = useState({ color: 'red' });
  const [cars, setCars] = useState({
    red: false,
    blue: false,
    yellow: false,
  });

  const moveCar = (car) => {
    setCars({
      ...cars,
      [car]: !cars[car],
    });
  };

  const changeSignal = (color) => {
    setSignalColor({
      color: color,
    });
  };

  return (
    <div className="container">
      <MyContext.Provider value={{ cars, moveCar, signalColor, changeSignal }}>
        <Cars />
        <TrafficSignal />
      </MyContext.Provider>
    </div>
  );
}

export default App;
