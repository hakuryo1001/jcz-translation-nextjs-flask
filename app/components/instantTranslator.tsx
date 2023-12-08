import React, { useState, useCallback } from "react";
import _ from "lodash";

function InstantTranslator() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const fetchTranslation = async (text: any) => {
    try {
      const response = await fetch("http://localhost:3000/api/translate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text }),
      });
      const data = await response.json();
      setTranslatedText(data.translatedText);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Debounce the API call
  const debouncedFetchTranslation = useCallback(
    _.debounce(fetchTranslation, 300), // 300 ms
    []
  );

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    debouncedFetchTranslation(text);
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
      </div>
      <div
        className="text-blue-400"
        style={{
          width: 300,
          height: 200,
          border: "1px solid black",
          padding: 10,
        }}
      >
        {translatedText}
      </div>
    </div>
  );
}

export default InstantTranslator;
