import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li className="siteName">
          <Link to="/">AmosOO7</Link>
        </li>
        <li>
          <Link to="/Projects" className="projects">
            Projects
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
