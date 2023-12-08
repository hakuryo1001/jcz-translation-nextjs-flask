"use client"; // This is a client component 👈🏽

import React, { useState } from "react";

function Translator() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleInputChange: any = (e: any) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const handleSubmit = async () => {
    try {
      // http://127.0.0.1:5328
      const response = await fetch("http://localhost:3000/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: inputText }),
      });

      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        <textarea
          value={inputText}
          className="text-black font-black"
          onChange={handleInputChange}
          placeholder="Enter text to translate"
          style={{ width: 300, height: 200 }}
        />
        <button onClick={handleSubmit}>Translate</button>
      </div>
      <div
        className="text-blue-400"
        // style={{
        //   width: 300,
        //   height: 200,
        //   border: "1px solid black",
        //   padding: 10,
        // }}
      >
        {translatedText}
      </div>
    </div>
  );
}

export default Translator;
