import React, { useState } from 'react';


function Add({name}) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [total, setTotal] = useState(number1 + number2);
  

  const sum = () => {
    setTotal(parseInt(number1) + parseInt(number2))
  }

  return (
    <>
    <input
      type="number"
      value={number1}
      onChange = { e => setNumber1(e.target.value)}
    />
    <input
      type="number"
      value={number2}
      onChange = { e => setNumber2(e.target.value)}
    />
    <button onClick={sum}>Add</button>
    <h2>{total}</h2>
    <p></p>
    </>
  )
};

export default Add;