import "./Header.css";
import linkedIn from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import github from "../assets/gitHub.jpg";
const Header = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Hello!</h1>
        <h1>Welcome</h1>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/akinsiku-ayokunle-a03021177/"
        >
          <img src={linkedIn}></img>
        </a>
        <a target="_blank" href="mailto:ayokunleakinsiku00@gmail.com">
          <img src={gmail}></img>
        </a>
        <a target="_blank" href="https://github.com/AmosOO7">
          <img src={github}></img>
        </a>
      </div>
    </div>
  );
};

export default Header;
