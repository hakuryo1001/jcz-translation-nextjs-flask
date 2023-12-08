"use client"; // This is a client component 👈🏽

import React, { useEffect, useState } from "react";

function ChoicefulTranslator() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const [mode, setMode] = useState("font");
  const [orthography, setOrthography] = useState();
  const [useRepeatChar, setUseRepeatChar] = useState();
  const [initialRBlock, setInitialRBlock] = useState();
  const [vBlock, setVBlock] = useState();
  const [useSchwaChar, setUseSchwaChar] = useState();
  const [toneConfig, setToneConfig] = useState();

  const handleInputChange: any = (e: any) => {
    setInputText(e.target.value);
    console.log(inputText);
  };
  const TickBox = () => {
    return (
      // Inside your component's return statement
      <div>
        <div>
          <label>
            Mode:
            <select value={mode} onChange={(e) => setMode(e.target.value)}>
              <option value="font">Font</option>
              <option value="web">Web</option>
            </select>
          </label>
        </div>
        <div>
          <label>
            Use Repeat Character:
            <input
              type="checkbox"
              checked={useRepeatChar}
              onChange={(e) => setUseRepeatChar(e.target.checked)}
            />
          </label>
        </div>
        {/* Add similar elements for other options */}
      </div>
    );
  };

  const handleSubmit = async () => {
    try {
      // http://127.0.0.1:5328
      const response = await fetch(
        "http://localhost:3000/api/instantChoicefulTranslate",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ text: inputText }),
        }
      );

      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // useEffect(() => {
  //   handleSubmit();
  // }, [mode, useRepeatChar]);

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <TickBox />
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

export default ChoicefulTranslator;
