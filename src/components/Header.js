import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { LOGO_URL } from "../utils/common";
import { Link } from "react-router-dom";
import useUserStatus from "../utils/useUserStatus";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [toggleLogin, setToggleLogin] = useState(true);
  const userStatus = useUserStatus();
  const { loggedInUser, count } = useContext(UserContext);

  const countItem = useSelector((store) => store.cart.items);
  console.log(countItem);

  const handleClick = () => {
    setToggleLogin(!toggleLogin);
  };

  return (
    <div className=" header">
      <div className="logo-container">
        <Link to="/">
          <img className="logo" alt="Logo" src={LOGO_URL} />
        </Link>
      </div>
      <div className="nav-items-container">
        <ul className="nav-items">
          <li>{userStatus ? "Online 🟢" : "Offline 🔴"}</li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart({countItem.length})</Link>
          </li>
          <button onClick={handleClick}>
            {toggleLogin ? "Login" : "Logout"}
          </button>{" "}
          <li>
            <FontAwesomeIcon icon={faUser} style={{ color: "#74C0FC" }} />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
