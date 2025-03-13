import React from "react";
import ReactDOM from "react-dom/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          alt="Logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnnsa7xkm8mp6aSd2ibvyRguJHxDFNiybjVg&s"
        />
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>Home</li>
          <li>About</li>
          <li>Cart</li>
          <li>Login</li>
          <li>
            <li>
              <FontAwesomeIcon icon={faUser} style={{ color: "#74C0FC" }} />
            </li>
          </li>
        </ul>
      </div>
    </div>
  );
};

const App = () => {
  return <Header />;
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
