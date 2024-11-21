import "./Services.css";
import tech from "../assets/techSupport.png";
import software from "../assets/software.png";
const Services = () => {
  return (
    <div className="Scontainer">
      <h1>Services</h1>
      <div className="details">
        <img src={tech}></img>

        <p>
          With over 4 years of experience, I specialize in technical support,
          system administration, and cybersecurity. I have assisted renowned
          companies like Microsoft and Cadbury in resolving complex IT issues,
          optimizing systems, and enhancing customer satisfaction. My services
          include managing Microsoft 365 services, configuring Virtual Machines
          (VMs), and implementing secure IT solutions. I also offer team
          training and improve IT operations to boost efficiency. Additionally,
          I hold certifications in IBM Cybersecurity Analyst, AWS Essentials,
          and Technical Support Fundamentals, ensuring up-to-date expertise in
          the field.
        </p>
        <div className="whiteBox" style={{ marginLeft: "20vw" }}></div>
        <img src={software}></img>

        <p>
          I provide software development services, leveraging my expertise in
          Java, PHP, HTML, CSS, JavaScript, React, and React Native. My services
          include developing innovative solutions such as biometric expert
          systems for attendance and security, ensuring accurate data
          management. I also specialize in designing custom logos and delivering
          IT training, empowering clients with essential technical skills.
          Additionally, I offer system configuration and software
          troubleshooting to optimize operations. My goal is to deliver tailored
          solutions that align with your specific needs and drive efficiency.
        </p>
      </div>
    </div>
  );
};

export default Services;
