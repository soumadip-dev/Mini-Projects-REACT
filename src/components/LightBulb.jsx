import React, { createContext, useState } from 'react';

const BulbContext = createContext();
const SetBulbContext = createContext();

const LightBulb = () => {
  const [bulbOn, setBulbOn] = useState(true);
  return (
    <BulbContext.Provider value={bulbOn}>
      <SetBulbContext.Provider value={setBulbOn}>
        <BulbState />
        <ToggleBulbState />
      </SetBulbContext.Provider>
    </BulbContext.Provider>
  );
};
export default LightBulb;

function BulbState() {
  return (
    <BulbContext.Consumer>
      {bulbOn => <div>{bulbOn ? 'Bulb on' : 'Bulb off'}</div>}
    </BulbContext.Consumer>
  );
}

function ToggleBulbState() {
  return (
    <BulbContext.Consumer>
      {bulbOn => (
        <SetBulbContext.Consumer>
          {setBulbOn => {
            const toggle = () => setBulbOn(!bulbOn);
            return <button onClick={toggle}>Toggle the bulb</button>;
          }}
        </SetBulbContext.Consumer>
      )}
    </BulbContext.Consumer>
  );
}
