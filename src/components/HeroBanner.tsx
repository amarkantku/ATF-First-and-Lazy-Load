import './HeroBanner.css';
const HeroBanner = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to MySite</h1>
        <p className="hero-subtitle">
          Discover features that make your experience amazing.
        </p>
        <a href="#features" className="hero-button">Explore Now</a>
      </div>
    </section>
  );
};

export default HeroBanner;
