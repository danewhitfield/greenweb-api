import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import InputData from "./components/InputData";
import Results from "./components/Results";

function App() {
  const [resultData, setResultData] = useState("");

  return (
    <div className="App">
      <Header />
      <InputData setResultData={setResultData} />
      <Results resultData={resultData} />
    </div>
  );
}

export default App;
