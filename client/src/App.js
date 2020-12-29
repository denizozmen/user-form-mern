import "./App.css";
import rootlogo from "./images/logo_root.gif";
import Usertable from "./components/Table/Table";
import UserForm from "./components/Form/Form";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <img className="rootlogo" src={rootlogo} alt="logo" />
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
