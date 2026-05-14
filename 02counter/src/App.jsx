import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  let [counter, setCounter]  = useState(15)
  //let counter = 15

  const addValue = () => {
    if(counter < 20){
      // setCounter(counter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
      setCounter(prevCounter => prevCounter+1);
    }
    // counter = counter + 1;
    // setCounter(counter);
  }

  const removeValue = () =>{
    if (counter > 0){
      setCounter(counter-1);
    }
  }

  return (
    <>
    <h1>Hello Peps!!</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>
      Add value {counter} 
    </button>
    <button onClick={removeValue}>
      Remove value {counter} 
    </button>
    </>
    
  )
}

export default App
