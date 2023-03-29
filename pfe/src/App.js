import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import OutputBlock from "./components/OutputBlock/OutputBlock";
import Feed from "./pages/Feed/Feed";

function App() {
  const [currenLike, setCurrentLice] = useState(0);
  return (
    <main
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      {currenLike}
      <Feed setCurrentLice={setCurrentLice} />
      <Feed />
      <footer style={{ height: "100%" }}>loh</footer>
    </main>
  );
}
// const [text, setText] = useState("Hello world");

// useEffect(() => {
//   console.log("text is changed", text);
// }, [text]);

//   return (
//     <div>
//       <OutputBlock text={text} />
//       <button
//         style={{ width: 100, height: 100 }}
//         onClick={() => {
//           setText("Poka");
//         }}
//       ></button>
//     </div>
//   );
// }

export default App;
