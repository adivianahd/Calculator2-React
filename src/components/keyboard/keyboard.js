import React from 'react';
import './keyboard.css';

function Keyboard(props) {
  let keys = "123456789+0-C=<".split("");
  return (
    <div className ="flex-container">
      {keys.map((e, i) =>
        <button key={i} onClick={() => {
          props.click(e)
        }}>{e}</button>)}
    </div>
  )
}

export default Keyboard;
