import React, { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import TextWindow from "./components/TextWindow";
import Header from "./components/Header";
import Button from "./components/Button";

export default function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(text.length);
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((darkMode) => !darkMode);
  }

  function handleUpperCase() {
    setText((text) => text.toUpperCase());
  }

  function handleLowerCase() {
    setText((text) => text.toLowerCase());
  }

  function handleCapitalize() {
    setText(
      text
        .split(" ")
        .map((txt) => txt.at(0).toUpperCase() + txt.slice(1))
        .join(" ")
    );
  }

  function handleClearAll() {
    setText("");
  }

  function handleClearSpaces() {
    setText((text) => text.trim().split(/ +/).join(" "));
  }

  useEffect(
    function () {
      setCount(text.length);
    },
    [text]
  );

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <Header darkMode={darkMode} onMode={toggleDarkMode} />

      <TextWindow text={text} onText={setText} />

      <Navigation>
        <span>
          <Button type={"uppercase"} onClick={handleUpperCase}>
            Convert to UpperCase
          </Button>
          <Button type={"lowercase"} onClick={handleLowerCase}>
            Convert to LowerCase
          </Button>
          <Button type={"capitalize"} onClick={handleCapitalize}>
            Capitalize
          </Button>
          <Button type={"clearAll"} onClick={handleClearAll}>
            Clear All
          </Button>
          <Button type={"clearSpaces"} onClick={handleClearSpaces}>
            Clear Extra Spaces
          </Button>
        </span>

        <span>{count} of 1000 words left</span>
      </Navigation>
    </div>
  );
}
