import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#0f0f0f",
        color: "#ccc",
        padding: "40px 20px",
        textAlign: "center",
        fontSize: "14px",
        borderTop: "1px solid #333",
        lineHeight: 1.8,
      }}
    >
      <div style={{ marginBottom: "12px" }}>
        <strong>Hotowork.com</strong> — Made with{" "}
        <span style={{ color: "#e25555" }}>❤️</span> for developers and
        dreamers.
      </div>

      <div style={{ marginBottom: "12px" }}>
        <a href="/terms" style={linkStyle}>
          Terms & Conditions
        </a>{" "}
        |{" "}
        <a href="/privacy" style={linkStyle}>
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="/contact" style={linkStyle}>
          Contact Us
        </a>
      </div>

      <div>© {new Date().getFullYear()} Hotowork.com. All rights reserved.</div>
    </footer>
  );
};

const linkStyle: React.CSSProperties = {
  color: "#bbb",
  textDecoration: "none",
  margin: "0 8px",
};

export default Footer;
