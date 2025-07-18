import React from "react";

const Testimonials: React.FC = () => {
  return (
    <>
      <section className="testimonials-section">
        <h2>Testimonials Section</h2>
        <p>What our customers say about us.</p>
        {/* You can add testimonials content here */}
      </section>

      <style>
        {`
          .testimonials-section {
            height: 500px;
            background-color: #fff7e6;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2rem;
            font-family: sans-serif;
          }

          .testimonials-section h2 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
          }

          .testimonials-section p {
            font-size: 1.1rem;
            color: #666;
          }
        `}
      </style>
    </>
  );
};

export default Testimonials;
