import React from "react";
import "./testimonial.css";
import { Container, Row, Col } from "reactstrap";
import Slider from "react-slick";

import img from "../../assests/images/Studentvoice.png";

const Testimonials = () => {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
  };
  return (
    <section>
      <Container>
        <Row>
          <Col lg="10" md="12" className="m-auto">
            <div className="testimonial__wrapper d-flex justify-content-between align-items-center ">
              <div className="testimonial__img w-50">
                <img src={img} alt="" className="w-75" />
              </div>

              <div className="testimonial__content w-50">
                <h2 className="mb-4"> <b> Our Students Voice</b></h2>

                <Slider {...settings}>
                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        <b>COUNTLESS OPPORTUNITIES AT ONE PLACE</b>
                      </h6>
                      <p>
                      Chandigarh University has been the biggest guiding force in helping me begin my 
                      professional career on a brighter note. With the skills I have learned here at CU. 
                      I feel proud confident about doing my best in the professional world.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold"><b>SUSHANT GAUR</b></h6>
                        <p>CHANDIGARH , INDIA </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        <b>SUCCESS STORIES THAT BEGAN ON ONE STAGE</b>
                      </h6>
                      <p>
                      Chandigarh University is an excellent placement hub for numerous National and
                       International Computer Software Companies. I appreciate Chandigarh University for making my dream come 
                      true and getting me placed in the leading American cloud computing company, Nutanix.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold"><b>SIDDHARTHA SRIVASTAVA</b></h6>
                        <p>PUNJAB , INDIA</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="single__testimonial">
                      <h6 className="mb-3 fw-bold">
                        <b>LIFT YOUR CAREER BEYOND EXPECTATIONS</b>
                      </h6>
                      <p>
                      There is nothing wrong in saying that Chandigarh University is a placement workshop 
                      for CSE engineering. If you want to be a CSE engineer, choose Chandigarh University as it 
                      offers 100% placement in this sector. 
                      Thank you Chandigarh University for getting me placed in Deloitte.
                      </p>

                      <div className="student__info mt-4">
                        <h6 className="fw-bold"><b>PRAVEEN RAI</b></h6>
                        <p>UTTARPRADESH , INDIA </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Testimonials;
