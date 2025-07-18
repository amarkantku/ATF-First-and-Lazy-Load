import './HeroBanner.css';

const HeroBanner = () => {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-content">
        <h1 id="hero-heading" className="hero-title">
          Welcome to <span className="highlight">Hotowork</span>!
        </h1>
        <p className="hero-subtitle">
          Discover powerful features designed to enhance your productivity.
        </p>
        <a href="#features" className="hero-button" role="button">
          🚀 Explore Now
        </a>
      </div>
    </section>
  );
};

export default HeroBanner;
