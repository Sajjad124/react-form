import { useState } from "react";
import "./App.css";
function App() {
  const [fullName, setFullName] = useState({
    fName: "",
    lName: "",
    email: "",
    number: "",
  });

  // remove these states and use only one state
  // const [fullName, setFullName] = useState();
  // const [lastname, setLastName] = useState("");

  const inputEvent = (event) => {
    console.log(event.target.value);
    console.log(event.target.name);
    // const value = event.target.value;
    // const name = event.target.name;
    const { name, value } = event.target;

    // const email = event.target.email;
    // const number = event.target.number;

    setFullName((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
          number: prevValue.number,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
          number: prevValue.number,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
          number: prevValue.number,
        };
      } else if (name === "number") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: prevValue.email,
          number: value,
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
          <h1>Input Form</h1>
          <h4>
            {fullName.email} {fullName.number}
          </h4>
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
          <input
            type="text"
            placeholder="Enter your email"
            name="email"
            onChange={inputEvent}
            value={fullName.email}
            autoComplete="off"
          />
          <input
            type="number"
            placeholder="Enter your phone"
            name="number"
            onChange={inputEvent}
            value={fullName.number}
          />
          <button type="submit">Click Me 👍</button>
          <h2>
            {fullName.fName} {fullName.lName}
          </h2>
        </div>
      </form>
    </div>
  );
}

export default App;
