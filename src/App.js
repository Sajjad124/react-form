import { useState } from "react";
import "./App.css";
function App() {
  const [name, setName] = useState("");

  const [fullName, setFullName] = useState();
  const [lastname, setLastName] = useState("");

  const onSubmits = (event) => {
    event.preventDefault();
    setFullName(name);
    setLastName(lastname);

  };
  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  const inputEventTwo = (event) => {
    console.log(event.target.value);
    setLastName(event.target.value);
  };
  return (
    <div className="div-main">
      <form onSubmit={onSubmits}>
        <div className="inner">
          <h1>Hello {fullName +" "+ lastname}</h1>
          <input
            type="text"
            placeholder="Enter input"
            value={name}
            onChange={inputEvent}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            onChange={inputEventTwo}
            value={lastname}
          />
          <button type="submit">Click Me 👍</button>
        </div>
      </form>
    </div>
  );
}

export default App;
