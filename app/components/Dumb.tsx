"use client"; // This is a client component 👈🏽
import { useEffect, useState } from "react";

const Dumb = () => {
  const [dumbJcz, setDumbJcz] = useState<string>("Nothing");

  const fetchDumbJcz = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/dumb-jcz");
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setDumbJcz(String(data.translatedText));
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchDumbJcz();
  }, []);
  //   }, [dumbJcz, setDumbJcz]);

  return (
    <div>
      <div className="text-3xl text-blue-700">Response: {dumbJcz}</div>
    </div>
  );
};

export default Dumb;
