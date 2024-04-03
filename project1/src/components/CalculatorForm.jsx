import "./index.css";
import React, { useState } from "react";


function CalculatorForm() {
    const [num1, setNum1] = useState("");
const [num2, setNum2] = useState("");
const [operation, setOperation] = useState("add");
const [result, setResult] = useState("");

const handleCalculate = () => {
  let computedResult;
  switch (operation) {
    case "add":
      computedResult = parseFloat(num1) + parseFloat(num2);
      break;
    case "subtract":
      computedResult = parseFloat(num1) - parseFloat(num2);
      break;
    case "multiply":
      computedResult = parseFloat(num1) * parseFloat(num2);
      break;
    default:
      computedResult = "";
  }
  setResult(computedResult);
};
  return (
    <div id="calculatorform">
      <h2>Calculator</h2>
      <p>Enter variables and select desired operation. </p>
      <form id="cform">
        <label htmlFor="x">
          First Variable
          <br />
        </label>
        <label htmlFor="y">
          Second Variable
          <br />
        </label>
        <input
          id="x"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          type="text"
          placeholder="Here..."
        ></input>

        <input
          id="y"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          type="text"
          placeholder="Here..."
        ></input>
        <label>Operation:</label>
        <select
          value={operation}
          onChange={(e) => setOperation(e.target.value)}
        >
          <option value="add">Add</option>
          <option value="subtract">Subtract</option>
          <option value="multiply">Multiply</option>
        </select>
      </form>
      <button onClick={handleCalculate}>Compute</button>
        {result && <p id="result">Result: {result}</p>}
    </div>
  );
}
export default CalculatorForm;
