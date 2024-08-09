import { useState } from "react";
import "./styles.css";

export const Calculator = () => {
  const [first, setFirst] = useState("");
  const [second, setSecond] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [equalBtnPressed, setEqualBtnPressed] = useState(false);

  const handleNumberInput = (value) => {
    if (equalBtnPressed && !operator) {
      setFirst(value);
      setEqualBtnPressed(false);
    } else if (!operator) {
      if (!(first.includes(".") && value === ".")) {
        setFirst((prev) => prev + value);
      }
    } else {
      if (!(second.includes(".") && value === ".")) {
        setSecond((prev) => prev + value);
      }
    }
  };

  const handleOperatorInput = (value) => {
    if (first) {
      setOperator(value);
    }

  };

  const calculateDecimalPlaces = () => {
    const firstDecimals = (first.split(".")[1] || "").length;
    const secondDecimals = (second.split(".")[1] || "").length;

    switch (operator) {
      case "^2":
        return firstDecimals * 2;
      case "*":
        return firstDecimals + secondDecimals;
      default:
        return Math.max(firstDecimals, secondDecimals);
    }
  };

  const resetEquation = (value) => {
    setResult(value);
    setFirst(value);
    setSecond("");
    setOperator("");
    setEqualBtnPressed(true);
  };

  const performCalculation = () => {
    let value;
    const parsedFirst = parseFloat(first);
    const parsedSecond = parseFloat(second);
    const decimalPlaces = calculateDecimalPlaces();

    switch (operator) {
      case "+":
        value = (parsedFirst + parsedSecond).toFixed(decimalPlaces);
        break;
      case "-":
        value = (parsedFirst - parsedSecond).toFixed(decimalPlaces);
        break;
      case "*":
        value = (parsedFirst * parsedSecond).toFixed(decimalPlaces);
        break;
      case "/":
        value = (parsedFirst / parsedSecond).toFixed(decimalPlaces);
        break;
      case "^":
        value = Math.pow(parsedFirst, parsedSecond);
        break;
      case "^2":
        value = Math.pow(parsedFirst, 2).toFixed(decimalPlaces);
        break;
      case "√":
        value = Math.sqrt(parsedFirst).toFixed(decimalPlaces);
        break;
      default:
        return;
    }

    resetEquation(value);
  };

  const clearAll = () => {
    setFirst("");
    setSecond("");
    setOperator("");
    setResult("");
  };

  const deleteLastDigit = () => {
    if (operator) {
      setSecond((prev) => prev.slice(0, -1));
    } else {
      setFirst((prev) => prev.slice(0, -1));
    }
  };

  const toggleNegative = () => {
    if (second) {
      setSecond((prev) => (-parseFloat(prev)).toString());
    } else if (first) {
      setFirst((prev) => (-parseFloat(prev)).toString());
    }
  };

  const displayEquation = () => {
    return `${first} ${operator} ${second}`;
  };

  return (
    <section className="container">
      <div className="calculator__body">
        <div className="calculator__screen">
          <div className="calculator__screen__previous">{displayEquation()}</div>
          <div className="calculator__screen__first">{result}</div>
        </div>
        <div className="calculator__buttons">
          <button onClick={clearAll} className="calculator__operator">Clear</button>
          <button onClick={deleteLastDigit} className="calculator__operator">Del</button>
          <button onClick={toggleNegative} className="calculator__operator">+/-</button>
          <button onClick={() => handleOperatorInput("^2")} className="calculator__operator">x<sup>2</sup></button>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button key={num} onClick={() => handleNumberInput(num.toString())} className="calculator__button">{num}</button>
          ))}
          <button onClick={() => handleNumberInput(".")} className="calculator__button">.</button>
          <button onClick={() => handleOperatorInput("+")} className="calculator__operator">+</button>
          <button onClick={() => handleOperatorInput("-")} className="calculator__operator">-</button>
          <button onClick={() => handleOperatorInput("*")} className="calculator__operator">*</button>
          <button onClick={() => handleOperatorInput("/")} className="calculator__operator">÷</button>
          <button onClick={() => handleOperatorInput("^")} className="calculator__operator">x<sup>y</sup></button>
          <button onClick={() => handleOperatorInput("√")} className="calculator__operator">√</button>
          <button onClick={performCalculation} className="calculator__operator">=</button>
        </div>
      </div>
    </section>
  );
};
