import { useState } from "react";
import "./App.css";
function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
  });

  // remove these states and use only one state
  // const [fullName, setFullName] = useState();
  // const [lastname, setLastName] = useState("");

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    const value = event.target.value;
    const name = event.target.name;

    setFullName((prevValue) => {
      // console.log(prevValue.fName);
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
        };
      }
      else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
        };
      }
    });
  };

  const onSubmits = (event) => {
    event.preventDefault();
    alert("Form Submitted");
    // setFullName(name);
    // setLastName(lastname);
  };

  return (
    <div className="div-main">
      <form onSubmit={onSubmits}>
        <div className="inner">
          <h1>Hello{fullName.fName + +fullName.lName} </h1>
          <input
            type="text"
            placeholder="Enter input"
            name="fName"
            value={fullName.fName}
            onChange={inputEvent}
          />
          <input
            type="text"
            placeholder="Enter your last name"
            name="lName"
            onChange={inputEvent}
            value={fullName.lName}
          />
          {/* <input
            type="text"
            placeholder="Enter password"
            onChange={inputEventTwo}
            value={lastname}
          /> */}
          <button type="submit">Click Me 👍</button>
        </div>
      </form>
    </div>
  );
}

export default App;
