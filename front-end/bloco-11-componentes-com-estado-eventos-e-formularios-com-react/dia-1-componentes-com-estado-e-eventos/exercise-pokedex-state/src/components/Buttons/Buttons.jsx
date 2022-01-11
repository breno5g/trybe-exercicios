import React, { useEffect, useState } from 'react';
import { Button } from './style';

export function Buttons(props) {
  const { filtered, pokemons, setType, setIndex } = props;
  const [types, setTypes] = useState([]);

  useEffect(() => {
    pokemons.forEach(({ type }) => {
      if (!types.includes(type)) {
        setTypes([...types, type]);
      }
    });
  });

  return (
    <>
      {types.map((type) => (
        <Button
          key={type}
          className="type"
          onClick={() => {
            setType(type);
            setIndex(1);
          }}
        >
          {type}
        </Button>
      ))}
      <Button onClick={() => setType('all')}>All</Button>
      <Button
        disabled={filtered.length <= 1}
        onClick={() => setIndex(filtered.length)}
      >
        Next
      </Button>
    </>
  );
}
