import React, { createContext, useState, useContext } from 'react';

const BulbContext = createContext();

const LightBulb = () => {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <BulbContext.Provider value={{ bulbOn, setBulbOn }}>
      <BulbState />
      <ToggleBulbState />
    </BulbContext.Provider>
  );
};
export default LightBulb;

function BulbState() {
  const { bulbOn } = useContext(BulbContext);
  return <div>{bulbOn ? 'Bulb on' : 'Bulb off'}</div>;
}

function ToggleBulbState() {
  const { bulbOn, setBulbOn } = useContext(BulbContext);
  const toggle = () => setBulbOn(!bulbOn);
  return <button onClick={toggle}>Toggle the bulb</button>;
}
