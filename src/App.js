import "./App.css";

function App() {
const inputEvent = () =>{
  console.log("clicked")
}
  return (
    <div className="div-main">
      <div className="inner">
        <h1>Hello</h1>
        <input type="text" placeholder="Enter input" onChange={inputEvent} />
        <button>Click Me 👍</button>
      </div>
    </div>
  );
}

export default App;
