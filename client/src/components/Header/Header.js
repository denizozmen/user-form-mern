import logo from "./logo.svg";
import "./Header.css";

function Header() {
  return (
    <div className="logoreact">
      <img src={logo} className="App-logo" alt="logo" />
      <h1 className="head">MERN-STACK</h1>
    </div>
  );
}

export default Header;
