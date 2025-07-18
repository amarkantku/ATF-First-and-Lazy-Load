import React, { useState } from "react";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple email validation
    if (!email || !email.includes("@")) {
      setStatus("error");
      return;
    }
    // Simulate subscription success
    setStatus("success");
    setEmail("");
  };

  return (
    <>
      <section className="newsletter-section">
        <h2>Newsletter Signup</h2>
        <p>Stay updated with our latest news and offers.</p>

        <form onSubmit={handleSubmit} className="newsletter-form" noValidate>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== "idle") setStatus("idle");
            }}
            required
            aria-label="Email address"
          />
          <button type="submit">Subscribe</button>
        </form>

        {status === "success" && (
          <p className="success-message">Thank you for subscribing!</p>
        )}
        {status === "error" && (
          <p className="error-message">Please enter a valid email address.</p>
        )}
      </section>

      <style>
        {`
          .newsletter-section {
            height: 500px;
            background-color: #eef6ff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2rem;
            font-family: sans-serif;
          }

          .newsletter-section h2 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }

          .newsletter-section p {
            font-size: 1.1rem;
            color: #444;
            margin-bottom: 1.5rem;
          }

          .newsletter-form {
            display: flex;
            gap: 0.75rem;
            max-width: 400px;
            width: 100%;
          }

          .newsletter-form input[type="email"] {
            flex-grow: 1;
            padding: 0.75rem 1rem;
            font-size: 1rem;
            border: 1px solid #ccc;
            border-radius: 4px;
            outline-offset: 2px;
            transition: border-color 0.3s ease;
          }

          .newsletter-form input[type="email"]:focus {
            border-color: #0070f3;
          }

          .newsletter-form button {
            padding: 0.75rem 1.5rem;
            font-size: 1rem;
            background-color: #0070f3;
            color: white;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            transition: background-color 0.3s ease;
          }

          .newsletter-form button:hover {
            background-color: #005bb5;
          }

          .success-message {
            margin-top: 1rem;
            color: green;
            font-weight: 600;
          }

          .error-message {
            margin-top: 1rem;
            color: red;
            font-weight: 600;
          }
        `}
      </style>
    </>
  );
};

export default Newsletter;
