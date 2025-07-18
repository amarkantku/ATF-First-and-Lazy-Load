const FAQ: React.FC = () => {
  return (
    <>
      <section id="faq" className="faq-section">
        <h2>FAQ Section</h2>
        <p>Find answers to the most frequently asked questions here.</p>
        {/* Add FAQ items here */}
      </section>

      <style>
        {`
          .faq-section {
            height: 500px;
            background-color: #f9f9f9;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
            padding: 2rem;
            font-family: Arial, sans-serif;
          }

          .faq-section h2 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            color: #333;
          }

          .faq-section p {
            font-size: 1.1rem;
            color: #666;
          }
        `}
      </style>
    </>
  );
};

export default FAQ;
