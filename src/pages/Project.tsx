import Projects from "../components/Projects";
import ecom from "../assets/ecom.png";
import pic from "../assets/pic.png";
import cal from "../assets/calgame.png";
import ecomm from "../assets/ecomm.png";
const Project = () => {
  return (
    <div>
      <Projects
        number="1"
        tech="React, HTML, CSS, TypeScript, JavaScript"
        link="https://commerca.netlify.app"
        image={ecom}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro laborum alias impedit voluptate architecto exercitationem assumenda animi recusandae praesentium, obcaecati doloremque, adipisci doloribus aut facilis maiores excepturi? Consequuntur, in!"
      />
      <Projects
        tech="HTML, CSS, JavaScript"
        number="2"
        link="https://nostalgic-gates-9b466c.netlify.app/saes"
        image={ecomm}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro laborum alias impedit voluptate architecto exercitationem assumenda animi recusandae praesentium, obcaecati doloremque, adipisci doloribus aut facilis maiores excepturi? Consequuntur, in!"
      />
      <Projects
        tech="HTML, CSS, JavaScript"
        number="3"
        link="https://nostalgic-gates-9b466c.netlify.app/lo"
        image={pic}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro laborum alias impedit voluptate architecto exercitationem assumenda animi recusandae praesentium, obcaecati doloremque, adipisci doloribus aut facilis maiores excepturi? Consequuntur, in!"
      />
      <Projects
        tech="HTML, CSS, JavaScript"
        number="4"
        link="https://nostalgic-gates-9b466c.netlify.app/thegame"
        image={cal}
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo porro laborum alias impedit voluptate architecto exercitationem assumenda animi recusandae praesentium, obcaecati doloremque, adipisci doloribus aut facilis maiores excepturi? Consequuntur, in!"
      />
    </div>
  );
};

export default Project;
