const handleSubmit = async () => {
  const response = await fetch("http://localhost:5328/api/translate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ text: inputText }),
  });
  const data = await response.json();
  setTranslatedText(data.translatedText);
};
