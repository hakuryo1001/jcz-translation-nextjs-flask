import React, { useState, useEffect, useCallback } from "react";
import _ from "lodash";

function InstantChoicefulTranslator() {
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const [mode, setMode] = useState("font");
  const [orthography, setOrthography] = useState("jcz_only");
  const [useRepeatChar, setUseRepeatChar] = useState(true);
  const [initialRBlock, setInitialRBlock] = useState("wl");
  const [vBlock, setVBlock] = useState("f");
  const [useSchwaChar, setUseSchwaChar] = useState(true);
  const [toneConfig, setToneConfig] = useState("vertical");

  const ChooseMode = () => {
    return (
      <div className="flex flex-col">
        <label>Mode:</label>
        <label>
          <input
            type="radio"
            value="font"
            checked={mode === "font"}
            onChange={(e) => setMode(e.target.value)}
          />
          Font
        </label>
        <label>
          <input
            type="radio"
            value="web"
            checked={mode === "web"}
            onChange={(e) => setMode(e.target.value)}
          />
          Web
        </label>
      </div>
    );
  };

  const ChooseOrthography = () => {
    return (
      <div className="flex flex-col">
        <label>Orthography</label>

        <label>
          <input
            type="radio"
            value="jcz_only"
            checked={orthography === "jcz_only"}
            onChange={(e) => setOrthography(e.target.value)}
          />
          Jyutcitzi only
        </label>
        <label>
          <input
            type="radio"
            value="honzi_jcz"
            checked={orthography === "honzi_jcz"}
            onChange={(e) => setOrthography(e.target.value)}
          />
          Mixed
        </label>
      </div>
    );
  };

  const ChooseRepeatChar = () => {
    return (
      <div className="flex flex-col">
        <label>Use Repeat Character 々:</label>
        <input
          className="m-1"
          type="checkbox"
          checked={useRepeatChar}
          onChange={(e) => setUseRepeatChar(e.target.checked)}
        />
      </div>
    );
  };

  const ChooseInitialRBlock = () => {
    return (
      <div className="flex flex-col">
        <label>Initial R Block:</label>

        <label>
          <input
            className="m-1"
            type="radio"
            name="initialRBlock"
            value="r"
            checked={initialRBlock === "r"}
            onChange={(e) => setInitialRBlock(e.target.value)}
          />
          ㄖ R
        </label>
        <label>
          <input
            className="m-1"
            type="radio"
            name="initialRBlock"
            value="wl"
            checked={initialRBlock === "wl"}
            onChange={(e) => setInitialRBlock(e.target.value)}
          />
           WL
        </label>
        <label>
          <input
            className="m-1"
            type="radio"
            name="initialRBlock"
            value="w"
            checked={initialRBlock === "w"}
            onChange={(e) => setInitialRBlock(e.target.value)}
          />
          禾 W
        </label>
      </div>
    );
  };

  const ChooseVBlock = () => {
    return (
      <div className="flex flex-col">
        <label>V block</label>
        <div>
          <label>
            <input
              className="m-1"
              type="radio"
              name="vBlock"
              value="v"
              checked={vBlock === "v"}
              onChange={(e) => setVBlock(e.target.value)}
            />
            v
          </label>
        </div>
        <div>
          <label>
            <input
              className="m-1"
              type="radio"
              name="vBlock"
              value="f"
              checked={vBlock === "f"}
              onChange={(e) => setVBlock(e.target.value)}
            />
            f
          </label>
        </div>
      </div>
    );
  };

  const ChooseUseSchwarChar = () => {
    return (
      <div className="flex flex-col">
        <label>Use Schwar char</label>
        <input
          type="checkbox"
          checked={useSchwaChar}
          onChange={(e) => setUseSchwaChar(e.target.checked)}
        />
      </div>
    );
  };

  const ChooseToneConfig = () => {
    return (
      <div className="flex flex-col">
        <label>Tones</label>
        <div>
          <label>
            <input
              type="radio"
              name="toneConfig"
              value="vertical"
              className="m-1"
              checked={toneConfig === "vertical"}
              onChange={(e) => setToneConfig(e.target.value)}
            />
            ' / "
          </label>
        </div>
        <div>
          <label>
            <input
              type="radio"
              name="toneConfig"
              value="horizontal"
              className="m-1"
              checked={toneConfig === "horizontal"}
              onChange={(e) => setToneConfig(e.target.value)}
            />
            - / =
          </label>
        </div>
      </div>
    );
  };

  const fetchTranslation = useCallback(
    async (text) => {
      try {
        const response = await fetch(
          "http://localhost:3000/api/instantChoicefulTranslate",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              text,
              mode,
              orthography,
              useRepeatChar,
              initialRBlock,
              vBlock,
              useSchwaChar,
              toneConfig,
            }),
          }
        );
        const data = await response.json();
        setTranslatedText(data.translatedText);
      } catch (error) {
        console.error("Error:", error);
      }
    },
    [
      mode,
      orthography,
      useRepeatChar,
      initialRBlock,
      vBlock,
      useSchwaChar,
      toneConfig,
    ]
  );

  useEffect(() => {
    // Fetch translation whenever inputText or any of the configs change
    if (inputText) {
      fetchTranslation(inputText);
    }
  }, [inputText, fetchTranslation]);

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
    <div>
      <div className="flex flex-col-6 m-4 bg-gray-950 p-4 space-x-3">
        <ChooseMode />
        <ChooseOrthography />
        <ChooseRepeatChar />
        <ChooseInitialRBlock />
        <ChooseVBlock />
        <ChooseUseSchwarChar />
        <ChooseToneConfig />
      </div>
      <div className="flex flex-cols-2 space-x-10 justify-center">
        {/* <div style={{ display: "flex", justifyContent: "space-between" }}> */}
        <div>
          <textarea
            value={inputText}
            className="text-black font-black bg-gray-400 p-2 rounded-lg"
            onChange={handleInputChange}
            placeholder="Enter text to translate"
            style={{ width: 300, height: 200 }}
          />
        </div>
        <div
          className="text-blue-900 bg-gray-900 rounded-lg p-2 font-white"
          style={{
            width: 300,
            height: 200,
            border: "1px solid black",
            padding: 10,
          }}
        >
          {translatedText}
        </div>
      </div>{" "}
    </div>
  );
}

export default InstantChoicefulTranslator;
