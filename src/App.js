import { useState } from "react";
import "./App.css";

export default function App() {
  const btnValues = [
    [7, 8, 9, "+"],
    [4, 5, 6, "-"],
    [1, 2, 3, "*"],
    ["C", 0, "=", "/"],
  ];

  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (value) => {
    if (value === "=") {
      const res = eval(inputValue);
      if (inputValue == 0 / 0) {
        setResult("NaN");
      } else if (inputValue == "") {
        setResult("Error");
      } else if (res == Infinity) {
        setResult("Infinity");
      } else {
        setResult(res);
      }

      setInputValue("");
    } else if (value === "C") {
      setInputValue("");
      setResult("");
    } else {
      setInputValue((prevInputValue) => prevInputValue + value);
    }
  };

  return (
    <div className="App">
      <h1>React Calculator</h1>
      <input
        style={{ width: "18em", height: "1.5em" }}
        type="text"
        value={inputValue}
        readOnly
      />
      <div style={{ padding: "1em" }}>{result}</div>
      {btnValues.map((buttonRow, i) => {
        return (
          <div key={i} className="row">
            {buttonRow.map((buttonValue, j) => {
              return (
                <button
                  key={j}
                  onClick={() => handleButtonClick(buttonValue)}
                  className="btn"
                >
                  {buttonValue}
                </button>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
