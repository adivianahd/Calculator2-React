import React from 'react';
import './screen.css';


function Screen(props) {
  return (
    <div align="center">
      <h1>{+props.n1}</h1>
      <h1>{+props.n2}</h1>
      <h1>{props.op}</h1>
      <h1>{props.rs}</h1>
    </div>
  )
}

export default Screen
