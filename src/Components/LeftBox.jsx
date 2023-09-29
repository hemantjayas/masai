import React from "react";
import { useState } from "react";
import '../App.css'
const LeftBox = ({ handleTip, handleBill, bill, people, handlePeople }) => {
  const [inputBill, setInputBill] = useState(null);

  const handleinputBill = (e) => {
    handleBill()
    setInputBill(e.target.value)
  }
  console.log(inputBill)

  const handle5 = () => {
    handleTip(5)
  }
  const handle10 = () => {
    handleTip(10)
  }
  const handle15 = () => {
    handleTip(15)
  }
  const handle20 = () => {
    handleTip(20)
  }
  const handle50 = () => {
    handleTip(50)
  }

  return (
    <div className= "left">
      {/* Add input for bill */}
      <p >Bill</p>
      <input type="number" className="bill_input" onChange={handleinputBill} />
      {/* Add buttons for % of tip */}
      <p>Select Tip %</p>
      <div className="buttonsall" >
        <button onClick={handle5}>5%</button>
        <button onClick={handle10}>10%</button>
        <button onClick={handle15}>15%</button>
        <button onClick={handle20}>20%</button>
        <button onClick={handle50}>50%</button>
        <button className="custom">Custom</button>
      </div>
      {/* Add input for no.of peoples */}
      <p>Number of people</p>
      <input className="people" type="text" />
    </div>
  );
};

export default LeftBox;
