import './App.css';
import { Button } from './Button';
import { ClearButton } from './ClearButton';
import logo from './img/freecodecamp-logo.png'
import { Screen } from './Screen';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('')

  const addInput = val => {
    setInput(input + val);
  };

  const clear = () => {
    setInput('');
  };

  const result = () => {
    if(input){
      setInput(evaluate(input))
    }
  };

  return (
    <div className="App">
     <img
     src={logo}
     alt='logo'
     />
     <div className='calculator'>
       <Screen input={input}/>
       <div className='row'>
        <Button onClick={addInput}>1</Button>
        <Button onClick={addInput}>2</Button>
        <Button onClick={addInput}>3</Button>
        <Button onClick={addInput}>+</Button>
       </div>
       <div className='row'>
        <Button onClick={addInput}>4</Button>
        <Button onClick={addInput}>5</Button>
        <Button onClick={addInput}>6</Button>
        <Button onClick={addInput}>-</Button>
       </div>
       <div className='row'>
        <Button onClick={addInput}>7</Button>
        <Button onClick={addInput}>8</Button>
        <Button onClick={addInput}>9</Button>
        <Button onClick={addInput}>*</Button>
       </div>
       <div className='row'>
        <Button onClick={result}>=</Button>
        <Button onClick={addInput}>0</Button>
        <Button onClick={addInput}>.</Button>
        <Button onClick={addInput}>/</Button>
       </div>
       <div className='row'>
         <ClearButton onClick={clear}/>
       </div>

     </div>
    </div>
  );
}

export default App;
