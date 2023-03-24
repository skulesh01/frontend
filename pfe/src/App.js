import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import OutputBlock from "./components/OutputBlock/OutputBlock";

function App() {
  const [text, setText] = useState("Hello world");

  useEffect(() => {
    console.log("text is changed", text);
  }, [text]);

  return (
    <div>
      <OutputBlock text={text} />
      <button
        style={{ width: 100, height: 100 }}
        onClick={() => {
          setText("Poka");
        }}
      ></button>
    </div>
  );
}

export default App;
