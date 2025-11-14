import React, { useState } from "react";
import "../Style/FAQ.css";

const faqs = [
  {
    question: "Who can join Crelon?",
    answer: "Anyone with passion and purpose — students, creators, learners, or innovators looking to learn by doing."
  },
  {
    question: "Is it free to join?",
    answer: "Yes! Our community access is completely free."
  },
  {
    question: " What makes Crelon different?",
    answer: "We don’t just teach skills — we help you apply them in real projects and collaborations."
  },
  {
    question: " How can organizations collaborate?",
    answer: "Companies and startups can partner with us to access creative talent, host workshops, offer internships, or co-create projects."
  }
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-wrapper">
      <h2>Frequently Asked Questions</h2>

      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div
            className={`faq-item ${openIndex === index ? "open" : ""}`}
            key={index}
            onClick={() => toggleFAQ(index)}
            onMouseMove={(e) => {
              e.currentTarget.style.setProperty("--mouse-x", e.nativeEvent.offsetX + "px");
              e.currentTarget.style.setProperty("--mouse-y", e.nativeEvent.offsetY + "px");
            }}
          >
            <div className="faq-question">
              <span>{faq.question}</span>
              <span className="arrow">{openIndex === index ? "−" : "+"}</span>
            </div>

            <div className={`faq-answer ${openIndex === index ? "open" : ""}`}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
