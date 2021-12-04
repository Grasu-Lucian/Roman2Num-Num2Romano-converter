import React from 'react'
import RomanConverter from './RomanConverter';
import { useState } from 'react';
export default function ConvertRoman() {
    function ClickEventHandler(e) {
        setNumber(e.target.value);
      }
      function ClickEventHandler1(e) {
        
        e.preventDefault();
      setNormalnumber(RomanConverter(number))
      setNumber('')
      }
  
      const[ normalnumber,setNormalnumber]=useState(0);
      const [number, setNumber] = useState("");
    return (
        <div className='app1'>
             <form type="submit">
        <input type="text" value={number} onChange={ClickEventHandler} />
        <button type="submit" onClick={ClickEventHandler1}>
          submit
        </button>
        </form>
        <h1>{normalnumber}</h1>
        </div>
    )
}
