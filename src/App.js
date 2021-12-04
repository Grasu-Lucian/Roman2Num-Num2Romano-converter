import "./App.css";
import { useState } from "react";
import ConvertNum from "./ConvertNum";
import RomanConverter from "./RomanConverter";
import ConvertRoman from "./ConvertRoman";
function App() {
  
  

  return (
    <div className="App">
      <div className="Roman">Roman Numeral Converter</div>
      <ConvertNum/>
      <div className="Numerals">Numerals Converter</div>
     <ConvertRoman/>
      
     
    </div>
  );
}

export default App;
