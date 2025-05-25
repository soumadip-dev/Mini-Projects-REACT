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
  return (
    <BulbContext.Consumer>
      {({ bulbOn }) => <div>{bulbOn ? 'Bulb on' : 'Bulb off'}</div>}
    </BulbContext.Consumer>
  );
}

function ToggleBulbState() {
  return (
    <BulbContext.Consumer>
      {({ bulbOn, setBulbOn }) => {
        {
          const toggle = () => setBulbOn(!bulbOn);
          return <button onClick={toggle}>Toggle the bulb</button>;
        }
      }}
    </BulbContext.Consumer>
  );
}
