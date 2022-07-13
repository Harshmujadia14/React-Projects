import './index'
import React,{useState,useEffect, useRef} from 'react';



function App() {
  const Starting_TIme=60;
  const[text,setText]=useState("");
  const[timer,SetTimer]=useState(Starting_TIme);
  const[run,setRun]=useState(false);
  const[wcount,setWcount]=useState(0)
  const textBoxref=useRef()
  
  function CalculateCount(text){
   const wordArr=text.trim().split(" ")

   return wordArr.filter(word => word!=="").length
  
  }

  function StartGame(){
    setRun(true)
    SetTimer(Starting_TIme)
    setText('');
    textBoxref.current.disabled=false
    textBoxref.current.focus()
  }

  function EndGame(){
    setRun(false)
    setWcount(CalculateCount(text))
  }
useEffect(()=>{
  if(run === true && timer>0){
  setTimeout(()=>{
    SetTimer(time=> time-1)
  },1000)
}else if(timer===0){
  EndGame()
}
},[timer,run])



  return (
    <div className="App">
      <h1> how fast you type?</h1>
      <textarea
      onChange={(e)=>setText(e.target.value)}
      value={text}
      disabled={!run}
      ref={textBoxref}
      />
   
      <h4>Time remaining:{timer}</h4>
      <button onClick={StartGame}
      disabled={run}
      >
        Start</button>
      <h1>Typing Speed:{wcount} Words/Minute</h1>
    </div>
  );
}

export default App;
