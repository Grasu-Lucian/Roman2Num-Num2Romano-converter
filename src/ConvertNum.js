import React from 'react'
import { useState } from 'react';
import NumeralConverter from './NumeralConverter';
export default function ConvertNum() {
    function ClickEventHandler(e) {
        setNumber(e.target.value);
      }
      function ClickEventHandler1(e) {
        
        e.preventDefault();
      setNormalnumber(NumeralConverter(number))
      setNumber('')
      }
  
      const[ normalnumber,setNormalnumber]=useState(0);
      const [number, setNumber] = useState("");
    return (
        <div className='app2'>
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
