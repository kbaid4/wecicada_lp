import React from "react";
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <div className="landing-root">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img 
            src="/images/landingpage/logo.png" 
            alt="WeCicada Logo" 
            className="navbar-logo"
            onClick={refreshPage} 
          />
        </div>
        <ul className="navbar-links">
          <li><a href="#" onClick={refreshPage} className="navbar-link">Home</a></li>
          <li><a href="#" onClick={() => handleScroll('features-section')} className="navbar-link">Benefits</a></li>
          <li><a href="#" onClick={() => handleScroll('how-it-works-section')} className="navbar-link">How it works?</a></li>
          <li><a href="#" onClick={() => handleScroll('footer-section')} className="navbar-link">Contact</a></li>
        </ul>
        <div className="navbar-btns">
          <button onClick={() => navigate('/SignInPage')} className="signin-btn">Sign In</button>
        </div>      
      </nav>

      {/* Header Section */}
      <header className="header-section">
        <h1 className="header-title">Where Event Planning Meets Innovation</h1>
        <p className="header-desc">
          Are you an event organizer looking for trusted suppliers? Or a supplier ready to expand your client base? WeCicada is the ultimate platform designed to make event planning and collaboration seamless, efficient, and secure.
        </p>
        <button onClick={() => navigate('/SignUpPage')} className="getstarted-btn">Get Started</button>
      </header>

      {/* Landscape Image */}
      <div className="landing-image-wrap">
        <img src="/images/landingpage/mainimage2.png" alt="Landscape" className="landing-image" />
      </div>

      {/* Why Choose Us Section */}
      <section id="features-section" className="features-section">
        <h2 className="features-title">Why choose WeCicada?</h2>
        <div className="features-list">
          <div className="feature-block">
            <h3 className="feature-block-title">Simplified Connections</h3>
            <p>With WeCicada, event organizers and suppliers can connect directly. Say goodbye to endless searches and hello to streamlined communication and collaboration. Our platform ensures you find the right partners faster than ever.</p>
          </div>
          <hr className="section-hr" />
          <div className="feature-block">
            <h3 className="feature-block-title">Trusted Partnership</h3>
            <p>We prioritize safety and reliability. Each supplier on our platform is thoroughly vetted, so you can focus on planning your event with peace of mind.</p>
          </div>
          <hr className="section-hr" />
          <div className="feature-block">
            <h3 className="feature-block-title">Unparalleled Efficiency</h3>
            <p>Our app simplifies every stage of event planning. From initial outreach to final agreements, we’ve built tools to save you time and resources.</p>
          </div>
          <hr className="section-hr" />
          <div className="feature-block">
            <h3 className="feature-block-title">Attract More Business</h3>
            <p>Suppliers can showcase their portfolios, gain visibility, and attract more clients. Event organizers can manage multiple events and vendors in one centralized platform.</p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="purple-section">
        <h2 className="purple-title">Features Designed for Success</h2>
        <div className="purple-img-wrap">
          <img src="/images/landingpage/features.png" alt="Features Infographic" className="purple-img" />
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works-section" className="how-section">
        <h2 className="how-title">How it works?</h2>
        <div className="how-img-wrap">
          <img src="/images/landingpage/howitworks.png" alt="How It Works Infographic" className="how-img" />
        </div>
      </section>

      {/* Footer Section */}
      <footer id="footer-section" className="footer-section">
        <p className="footer-text">
          Ready to Revolutionize Your Events? Join thousands of professionals who are transforming the way they work.
        </p>
        <a href="mailto:contact@wecicada.com" style={{ fontSize: '20px', display: 'block', marginTop: '20px', color: '#441752', textDecoration: 'none' }}>
          Contact: contact@wecicada.com
        </a>
        <p style={{ color: '#441752', fontSize: '12px', marginTop: '20px' }}>Copyright © WeCicada</p>
      </footer>
    </div>
  );
};

export default LandingPage;
