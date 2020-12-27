import logo from "./logo.svg";
import rootlogo from "./images/logo_root.gif";
import "./App.css";
import Usertable from "./components/Table";
import UserForm from "./components//Form";

function App() {
  return (
    <div className="App">
      <div className="logoreact">
        <img src={logo} className="App-logo" alt="logo" />
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
