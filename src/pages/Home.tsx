import Header from "../components/Header";
import Skills from "../components/Skills";
import "../components/Experience.css";
import Experience from "../components/Experience";
const Home = () => {
  return (
    <div>
      <Header />
      <Skills />
      <h1>VOLUNTEER ACTIVITIES</h1>
      <Experience
        org="CALADIUM LAGOS SME BOOTCAMP"
        pos="Participant management and welfare coordination"
        dura="2021 - 2024"
        details1="• Oversee the registration process, ensuring that suitable businesses are selected to attend the bootcamp. A total 
of 1,000+ MSMEs registered in 2023"
        details2="• Facilitate regular communication between participants, serving as the primary point of contact to address 
inquiries and provide support"
        details3="• Compile and analyze participant feedback to prepare a summary report with actionable insights aimed at 
enhancing the bootcamp experience"
        details4="• Manage the logistics for bootcamp partners responsible for providing food and refreshments, ensuring smooth 
coordination and timely delivery for the event "
      />
    </div>
  );
};

export default Home;
