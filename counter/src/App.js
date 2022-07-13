import React,{useState} from 'react';
import './App.css';

function App() {

  const [counter, setCounter] = useState(0);
  //  const [error, setError] = useState();
  
  const increase =() =>{
    setCounter(count =>count+1);
     document.getElementById('alert').innerHTML="";   
    // let error = "";
    // setCounter(error);
    // console.log(); 


  };

  const decrease =() =>{
     if(counter >0){
      
    setCounter(count =>count-1);
    }
    
   if(counter===0){
      //  alert("the number cannot be negative")
    
     document.getElementById('alert').innerHTML="the number cannot be negative"; 
    // console.log(error); 
   } 
    
  };
  const reset =()=>{
  
  
    
    setCounter(0)
    
    
  }
  return (
    <div className="counter">
      <h1>Counter</h1>
      <span className='counter__output'>{counter}</span>
      <h3  id='alert'></h3>
      {/* <span className=''>{error}</span> */}
      <div className="btn__container">

      <button type='button' onClick={increase}>+</button>
      <button type='button' onClick={decrease }>-</button>
      <button className='reset'onClick={reset}>Reset</button>
      </div>
      
      

      
    </div>
  );
}

export default App;
