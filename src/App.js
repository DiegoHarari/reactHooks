import React, { useState } from "react";


function Add() {
  const [numbers, setNumbers] = useState({});
  const [result, setResult] = useState("");

  function calculate () {
    const {firstNum, secondNum} = numbers
    setResult(Number(firstNum) + Number(secondNum) )
  }

  function handleChange(e) {
    const {name, value} = e.target

    const newNumbers = { ...numbers, [name]: value };
    setNumbers(newNumbers);
  }

  return (
    <>
      <input type="number" name="firstNum" onChange={ (e) => handleChange(e)}/>
      <input type="number" name="secondNum" onChange={ (e) => handleChange(e)}/>
      <button onClick={calculate}>Add</button>
      <p>Result: {result}</p>
    </>
  );
};

export default Add;