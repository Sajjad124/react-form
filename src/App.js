import { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState();

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
  };
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  return (
    <div className="div-main">
      <form onSubmit={onSubmits}>
        <div className="inner">
          <h1>Hello {fullName}</h1>
          <input
            type="text"
            placeholder="Enter input"
            value={name}
            onChange={inputEvent}
          />
          <button type="submit">Click Me 👍</button>
        </div>
      </form>
      <hadia></hadia>
    </div>
  );
}

export default App;
