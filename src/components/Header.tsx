import "./Header.css";
import insta from "../assets/Instagram.png";
import linkedin from "../assets/linkedin.png";
const Header = () => {
  return (
    <div className="HContainer">
      <div className="h1">
        <h1>Welcome to </h1>
        <h1>Ifeoma Uchefunah</h1>
        <div
          className="whiteBox"
          style={{ marginLeft: "1vw", color: "#fff" }}
        ></div>
        <div className="content">
          <a
            target="_blank"
            href="https://www.instagram.com/ifeoluwa_u?igsh=MXgwOXFycmt6OXd6Yg=="
          >
            <img src={insta}></img>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/ifeoma-uchefunah-2034421ab/"
          >
            <img src={linkedin}></img>
          </a>
        </div>
      </div>

      <div className="image"></div>
    </div>
  );
};

export default Header;
