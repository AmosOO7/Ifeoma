import "./Skill.css";
import admin from "../assets/admin.png";
import aws from "../assets/aws.png";
import crm from "../assets/crm.jpg";
import css from "../assets/css.png";
import cyber from "../assets/cyber.png";
import data from "../assets/data.png";
import html from "../assets/html.png";
import ibm from "../assets/ibm.png";
import java from "../assets/java.png";
import javascript from "../assets/javascript.jpg";
import microsoft from "../assets/microsoft.webp";
import network from "../assets/network.jpg";
import php from "../assets/php.png";
import react from "../assets/react.png";
import reactN from "../assets/reactN.png";
import software from "../assets/software.png";
import system from "../assets/system.png";
import tech from "../assets/techSupport.png";
import troubleshoot from "../assets/troubleshoot.png";
import vm from "../assets/vm.png";
import figma from "../assets/figma.png";
const Skill = () => {
  return (
    <div className="skillContainer">
      <h1> Skills</h1>

      <div className="skillImage">
        <h2>Technical Skills</h2>
        <div className="item">
          <img src={admin}></img>
          <div>System Administration</div>
        </div>
        <div className="item">
          <img src={aws}></img>
          <div>AWS Technical Cloud Essentials</div>
        </div>
        <div className="item">
          <img src={crm}></img>
          <div>CRM</div>
        </div>
        <div className="item">
          <img src={cyber}></img>
          <div>Cybersecurity</div>
        </div>
        <div className="item">
          <img src={data}></img>
          <div>Data Backup and Recovery</div>
        </div>
      </div>
      <div className="whiteBox" style={{ marginLeft: "10vw" }}></div>
      <div className="skillImage">
        <div className="item">
          <img src={ibm}></img>
          <div>IBM Cybersecurity Analyst</div>
        </div>
        <div className="item">
          <img src={microsoft}></img>
          <div>Microsoft 365 services</div>
        </div>
        <div className="item">
          <img src={network}></img>
          <div>Network Troubleshooting</div>
        </div>
        <div className="item">
          <img src={software}></img>
          <div>Troubleshooting Software Issues</div>
        </div>
        <div className="item">
          <img src={system}></img>
          <div>IT System Optimization</div>
        </div>
        <div className="item">
          <img src={tech}></img>
          <div>Technical Support</div>
        </div>
        <div className="item">
          <img src={troubleshoot}></img>
          <div>Troubleshoot Hardware Issues</div>
        </div>
        <div className="item">
          <img src={vm}></img>
          <div>Virtual Machine</div>
        </div>
      </div>
      <div className="whiteBox" style={{ marginLeft: "30vw" }}></div>
      <div className="skillImage">
        <h2>Programming Skills</h2>
        <div className="item">
          <img src={css}></img>
          <div>CSS</div>
        </div>
        <div className="item">
          <img src={php}></img>
          <div>PHP</div>
        </div>
        <div className="item">
          <img src={react}></img>
          <div>React</div>
        </div>
        <div className="item">
          <img src={reactN}></img>
          <div>React Native</div>
        </div>
        <div className="item">
          <img src={java}></img>
          <div>Java</div>
        </div>
        <div className="item">
          <img src={javascript}></img>
          <div>JavsScript</div>
        </div>
        <div className="item">
          <img src={html}></img>
          <div>HTML</div>
        </div>
        <div className="item">
          <img src={figma}></img>
          <div>Figma</div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
