import React, { useEffect, useState } from 'react';

import { createContext } from 'react';

export const Context = createContext();

const Provider = ({ children }) => {
  const [timer, setTimer] = useState(0);
  const [number, setNumber] = useState(0);
  const [isMultiple, setIsMutiple] = useState(false);

  const generateRandomNumber = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    if (15 % 5 === 0 || 15 % 3) {
      setIsMutiple(true);
      setTimeout(() => setIsMutiple(false), 4000);
    }
    setNumber(randomNumber);
    setTimer(0);
  };

  const addTimer = () => {
    setTimer((timer) => timer + 1);
  };

  useEffect(() => {
    const numberInterval = setInterval(generateRandomNumber, 10000);
    const timerInterval = setInterval(addTimer, 1000);
    return () => {
      clearInterval(numberInterval);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <Context.Provider value={{ timer, number, isMultiple }}>
      {children}
    </Context.Provider>
  );
};

export default Provider;
