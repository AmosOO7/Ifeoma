import linkedIn from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";
import github from "../assets/gitHub.jpg";
import location from "../assets/locattion.png";
import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="location">
          <img
            src={location}
            style={{ backgroundColor: "#242424", border: "#242424" }}
          ></img>
          <h2>Lagos, Nigeria</h2>
        </div>
        <div className="whiteBox"></div>
        <div className="footerContent">
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
          <p>© 2024 Ayokunle-Akinsiku. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
