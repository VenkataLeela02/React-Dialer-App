import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  const [count, setCount] = useState(0);
  const [state,setState] = useState("");
  const [text,setText] = useState("");
  const [indexVal,setIndex] = useState(1);

  const array = [[",",".","!"],["a","b","c"],["d","e","f"],["g","h","i"],["j","k","l"],["m","n","o"],["p","q","r","s"],["t","u","v"],["w","x","y","z"],["*"],["0"],["#"]];
  
  const clickHandle = (e,index) => {
    setIndex(index);
    e.preventDefault();
    e.stopPropagation();
    setCount(count+1);
    return indexVal;
  } 

  useEffect(() => {
    
    const stateInt = setInterval(() => {setCount(0);setIndex(indexVal+1);setState(array[indexVal][count]);},210);
    
    const textChange = setTimeout(() => {setText(text+state)},1000);
    return () => {clearInterval(stateInt,textChange)};

  }, [count,setCount],[state,setState],indexVal);


  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <input type="text" className="text" defaultValue={text.replace(/,/g,'')}></input>
          {array.map((buttonId,index) => (
          <button
            key={index}
            value={index}
            onClick={(event) => clickHandle(event,index)}
            /*onMouseUp= {(event) => {setText(text+(index+1));}}*/
            useref={index}
          >
            {(index<9)? index+1 : ""}<br></br>{buttonId}
          </button>
           ))}
          
        </div>
      </header>
    </div>
  );
}

export default App;
