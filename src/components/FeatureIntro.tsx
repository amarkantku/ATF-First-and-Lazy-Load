import React from "react";

const FeatureIntro: React.FC = () => {
  const styles = {
    section: {
      padding: "4rem 2rem",
      backgroundColor: "#f9f9f9",
      textAlign: "center" as const,
    },
    heading: {
      fontSize: "2rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },
    subheading: {
      fontSize: "1.1rem",
      color: "#555",
      maxWidth: "700px",
      margin: "0 auto",
      lineHeight: 1.6,
    },
  };

  return (
    <section id="feature" style={styles.section}>
      <h2 style={styles.heading}>Why Choose Us?</h2>
      <p style={styles.subheading}>
        Our platform offers powerful features designed to improve your
        experience, simplify your workflow, and help you achieve more with less
        effort.
      </p>
    </section>
  );
};

export default FeatureIntro;
