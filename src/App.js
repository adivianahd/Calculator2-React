import React, {useState} from 'react';
import Screen from '../src/components/screen/screen'
import Keyboard from './components/keyboard/keyboard';

function App() {
const [ n1, setN1] = useState(0);
const [ n2, setN2] = useState(0);
const [ op, setOp] = useState(null);

return ( 
  <div className="App">
    <Screen n1={n1} n2={n2} op={op}/>
    <Keyboard  click={(key)=>
      {
        if(op === null && !isNaN(key)){
          return setN1(n1 + key)
        }
        if(op !== null && !isNaN(key)){
          return setN2(n2 + key)
        }
        if(key === "+" || key === "-"){
          return setOp(key)
        }
      }}/>
  </div> 
);
}

export default App;
