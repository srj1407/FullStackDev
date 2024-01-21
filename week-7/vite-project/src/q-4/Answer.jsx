import React, { useState } from "react";

function Answer() {
  const [data, setData] = useState("");
  const [input, setInput] = useState(0);
  const handleClick = () => {
    let count = parseInt(input);
    let r = "";
    for (let i = 0; i < count; i++) {
      const len = Math.floor(Math.random() * 10) + 1;
      let word = "";
      for (let j = 0; j < len; j++) {
        let t = Math.floor(Math.random() * 25) + 1;
        word += String.fromCharCode("a".charCodeAt(0) + t);
      }
      word += " ";
      r += word;
    }
    setData(r);
  };
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  return (
    <div>
      <h2>Para Generator</h2>
      <input
        placeholder="Enter number of words"
        onChange={handleChange}
        value={input}
      ></input>
      <button onClick={handleClick}>Generate</button>
      <p>{data}</p>
    </div>
  );
}

export default Answer;
