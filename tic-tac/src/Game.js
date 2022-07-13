// import logo from './logo.svg';
// import './App.css';

// function Game() {
//   return (
//    <div>

//    </div>
//   );
// }

// export default Game;
 import React, { useEffect, useRef } from "react";

// const arr = ["left", "right","center",'top','bottom'];
// export default function App() {
//   const refs = useRef(arr.map(() => React.createRef()));

//   useEffect(() => {
//     refs.current[0].current.focus();
//   }, []);

//   return (
//     <div>
//       {arr.map((el, i) => (
//         <p key={i}>
//           <input ref={refs.current[i]} value={el} onChange={() => {}} />
//         </p>
//       ))}
//     </div>
//   );
// }
 export default function TextInputWithFocusButton() {
  const inputEl = useRef(null);
  const onButtonClick = () => {
    // `current` points to the mounted text input element
    inputEl.current.focus();
  };
  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}