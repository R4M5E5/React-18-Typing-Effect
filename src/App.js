import "./App.css";
import { useTypingEffect } from "./hooks/typing-effect";

function App() {
  const text = useTypingEffect("Hello World!", 500);
  return <div className="App">{text}</div>;
}

export default App;
