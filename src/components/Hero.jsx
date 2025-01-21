import './Hero.css';
import heroImage from '../assets/hero-image.jpg'; // Import image from assets

const Hero = () => {
    return (
        <div className="hero">
            <div className="background-animation"></div> {/* Background Animation */}
            <div className="hero-content">
                <div className="text-section">
                    <h1>Journey Hemoroz</h1>
                    <p>BSIT</p>
                    <p>
                        Discover innovative solutions tailored to your needs. Join us today and start achieving your goals.
                    </p>
                    <button>Get Started</button>
                </div>
                <div className="image-section">
                    <img src={heroImage} alt="Hero Illustration" />
                </div>
            </div>
        </div>
    );
};

export default Hero;
