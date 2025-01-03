import "./Skill.css";
import microsoft from "../assets/microsoft.webp";
import fin from "../assets/fin.jpg";
import pro from "../assets/problem.png";
import proj from "../assets/project.png";
import res from "../assets/research.png";
import thin from "../assets/thinking.jpg";
const Skills = () => {
  return (
    <div className="skillContainer">
      <div
        className="whiteBox"
        style={{ color: "pink", marginLeft: "1vw" }}
      ></div>
      <div className="skillImage">
        <h1>Skills</h1>
        <div className="item">
          <img src={microsoft}></img>
          <div>Advanced Microsoft Office</div>
        </div>
        <div className="item">
          <img src={fin}></img>
          <div>Financial Modelling</div>
        </div>
        <div className="item">
          <img src={pro}></img>
          <div>Problem Solving</div>
        </div>
        <div className="item">
          <img src={thin}></img>
          <div>Critical & Analytical thinking</div>
        </div>
        <div className="item">
          <img src={res}></img>
          <div>Research</div>
        </div>
        <div className="item">
          <img src={proj}></img>
          <div>Project Management</div>
        </div>
        <div
          className="whiteBox"
          style={{ color: "pink", marginLeft: "60vw" }}
        ></div>
      </div>
    </div>
  );
};

export default Skills;
