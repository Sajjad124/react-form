import { useState } from "react";
import "./App.css";

function App() {
  const[name,setName] = useState();

  const inputEvent = (event) =>{
  console.log(event.target.value)
  setName(event.target.value)
}
  return (
    <div className="div-main">
      <div className="inner">
        <h1>Hello {name}</h1>
        <input type="text" placeholder="Enter input" onChange={inputEvent} />
        <button>Click Me 👍</button>
      </div>
    </div>
  );
}

export default App;
