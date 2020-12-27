import logo from "./logo.svg";
import rootlogo from "./images/logo_root.gif";
import "./App.css";
import Usertable from "./components/Table";

function App() {
  return (
    <div className="App">
      <div className="logoreact">
        <img src={logo} className="App-logo" alt="logo" />
      </div>
      <div>
        <img src={rootlogo} className="" alt="logo" />
      </div>
      <Usertable />
    </div>
  );
}

export default App;

{
  /* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */
}
{
  /* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */
}
