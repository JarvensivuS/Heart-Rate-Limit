import React, { useState } from 'react';

function App() {
  const [age, setAge] = useState(25);

  const calculateHeartRateLimits = () => {
    const lowerLimit = Math.floor((220 - age) * 0.65);
    const upperLimit = Math.floor((220 - age) * 0.85);
    return `${lowerLimit}-${upperLimit}`;
  };

  const handleAgeChange = (event) => {
    const newAge = parseInt(event.target.value);
    setAge(newAge);
  };

  return (
    <div className="App">
      <h1>Heart Rate Limits Calculator</h1>
      <div>
        <label>Age</label>
        <input type="text" value={age} onChange={handleAgeChange} />
      </div>
      <div>
        <p>Hr limits</p>
        <p>{calculateHeartRateLimits()}</p>
      </div>
    </div>
  );
}

export default App;
