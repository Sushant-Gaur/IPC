import React from "react";
import { Container, Row, Col } from "reactstrap";
import "./features.css";

const FeatureData = [
  {
    title: <b>Quick Learning</b>,
    desc: <b>"Quick learning" refers to the ability to acquire new knowledge or 
      skills rapidly and efficiently. Define what you want to learn and why. Having a clear 
      purpose and goal will help you stay focused and motivated."</b>,
    icon: "ri-draft-line",
  },

  {
    title: <b>All Time Support </b>,
    desc: <b> " If you have a specific question or need assistance with a particular 
      issue, please feel free to ask, and I'll do my best to provide you with the information 
      or guidance you need."</b>,
    icon: "ri-discuss-line",
  },

  {
    title: <b>Certification</b>,
    desc: <b>"Certifications are a way to officially validate your knowledge
       and skills in a particular field or industry. They can be valuable for 
       career advancement, job opportunities, and personal developmen"</b>,
    icon: "ri-contacts-book-line",
  },
];

const Features = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Features;
