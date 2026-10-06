// import React from 'react'
import "./ShortFaqs.css";

import Accordion from "react-bootstrap/Accordion";
import { faqs } from "../../assets/data/Faqs";

export default function ShortFaqs() {
  return (
    <section className="faqs-section">
        <div className="faqs-container">
          <h4>FAQ</h4>
          <p>Most frequent questions and answers</p>
          <Accordion defaultActiveKey="0">
            {faqs.map((item, index) => (
              <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>
                  <h5>{item.question}</h5>
                </Accordion.Header>
                <Accordion.Body>
                  {item.answer}
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>
  )
}
