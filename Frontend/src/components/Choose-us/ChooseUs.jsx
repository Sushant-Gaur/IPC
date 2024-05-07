import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/images/ClickMe.jpg";
import "./choose-us.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2><b>Why Choose Us</b></h2>
              <p><b>When it comes to finding the perfect college
                 or university for your educational journey in India, 
                 you have a multitude of choices. Our website boasts an extensive
                  database of colleges and universities from across India. Whether you're looking
                   for top-tier engineering institutes, prestigious medical colleges,
                  leading law schools, or renowned business schools, we've got it all in one place
                  Our website boasts an extensive database of colleges and universities from across India. 
                  </b>
                
              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://youtu.be/xXPDde9pap4?si=sFlHlUocnJ5vaAaY"
                  controls
                  width="100%"
                  height="400px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ChooseUs;
