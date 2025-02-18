import './Hero.css';
import HeroImage from '../assets/about.jpg'; 

function About() {
  return (
    <div className="hero">
      <div className="background-animation"></div> 
      <div className="hero-content">
        <div className="text-section">
          <h2>An aspiring web developer with practical experience in designing and building simple websites.</h2>
          <p>
          Proficient in HTML, CSS, JavaScript, and PHP, with a strong passion for crafting user-friendly and visually engaging web solutions. Enthusiastic about applying my skills and continuously learning in a dynamic and challenging environment.
          </p>
        </div>
        <div className="image-section">
          <img src={HeroImage} alt="Hero Illustration" />
        </div>
      </div>
    </div>
  );
}

export default About;
