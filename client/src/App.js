import logo from "./logo.svg";
import "./App.css";
import rootlogo from "./images/logo_root.gif";
import Usertable from "./components/Table/Table";
import UserForm from "./components/Form/Form";

function App() {
  return (
    <div className="App">
      <div className="logoreact">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="head">MERN-STACK</h1>
      </div>
      <div>
        <img src={rootlogo} className="" alt="logo" />
      </div>
      <div className="userForm">
        <UserForm />
      </div>
      <div className="userTable">
        <Usertable />
      </div>
    </div>
  );
}

export default App;
