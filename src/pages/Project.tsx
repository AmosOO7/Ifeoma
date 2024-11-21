import Projects from "../components/Projects";
import ecom from "../assets/ecom.png";
import pic from "../assets/pic.png";
import cal from "../assets/calgame.png";
import ecomm from "../assets/ecomm.png";
import cube from "../assets/cube.png";
const Project = () => {
  return (
    <div>
      <Projects
        number="1"
        box="10vw"
        tech="React, HTML, CSS, TypeScript, JavaScript"
        link="https://cubessquares.netlify.app/"
        image={cube}
        content="Cubessquares is a fast-paced arcade game where players control a character that must evade falling cubes for as long as possible. The longer the player survives, the more challenging the game becomes, with increasing cube speed and density. The game tests reflexes, strategy, and precision."
      />
      <Projects
        number="2"
        box="50vw"
        tech="React, HTML, CSS, TypeScript, JavaScript"
        link="https://commerca.netlify.app"
        image={ecom}
        content="The mockup showcases a sleek, modern, and user-friendly design for an e-commerce platform. The goal is to provide a seamless shopping experience, emphasizing aesthetics, usability, and functionality. The mockup is tailored to reflect the branding of the business and highlights features that drive conversions and user engagement."
      />
      <Projects
        tech="HTML, CSS, JavaScript"
        number="3"
        box="20vw"
        link="https://nostalgic-gates-9b466c.netlify.app/thegame"
        image={cal}
        content="The game is designed to make learning and practicing math fun and interactive. It helps players, especially children and students, improve their math skills, such as addition, subtraction, multiplication, and division, as well as number recognition and sequencing. The game combines engaging visuals, sound effects, and gamified elements to encourage continuous learning."
      />
      <Projects
        tech="HTML, CSS, JavaScript"
        number="4"
        box="1vw"
        link="https://nostalgic-gates-9b466c.netlify.app/saes"
        image={ecomm}
        content="The website is designed to sell mobile phones, laptops, and related accessories. It combines sleek, modern design with a focus on showcasing product features and specifications, catering to both tech-savvy shoppers and casual buyers. The platform emphasizes ease of navigation, detailed product information, and trust-building elements like customer reviews and secure payment options."
      />
      <Projects
        tech="HTML, CSS, JavaScript"
        number="5"
        box="60vw"
        link="https://nostalgic-gates-9b466c.netlify.app/lo"
        image={pic}
        content="The website is designed to provide users with a platform for discovering and downloading high-quality images. It caters to a diverse audience, including graphic designers, photographers, marketers, and casual users. The platform emphasizes ease of use, fast downloads, and a well-organized library of photos across various categories."
      />
    </div>
  );
};

export default Project;
