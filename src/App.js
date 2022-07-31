import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();

  const onSubmit = () => {
    setFullName(name);
  };
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  return (
    <div className="div-main">
      <div className="inner">
        <h1>Hello {fullName}</h1>
        <input
          type="text"
          placeholder="Enter input"
          value={name}
          onChange={inputEvent}
        />
        <button onClick={onSubmit}>Click Me 👍</button>
      </div>
    </div>
  );
}

export default App;
