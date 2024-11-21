import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <div
        className="whiteBox"
        style={{ color: "pink", marginLeft: "60vw" }}
      ></div>
      <ul>
        <li className="siteName">
          <Link to="/" className="link">
            Home
          </Link>
          <Link to="/Experience" className="link">
            Experience
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
