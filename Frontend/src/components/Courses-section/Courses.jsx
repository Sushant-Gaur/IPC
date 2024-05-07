import React from "react";
import { Container, Row, Col } from "reactstrap";
import courseImg1 from "../../assests/images/CU.png";
import courseImg2 from "../../assests/images/IIT.png";
import courseImg3 from "../../assests/images/AIIMS.png";
import { useLocation } from "react-router-dom";
import "./courses.css";
import CourseCard from "./CourseCard";
import Header from "../Header/Header";

const coursesData = [
  {
    id: "01",
    title: "CHANDIGARH UNIVERSITY",
    Placement: 9500,
    students: 12.5,
    rating: 7.1,
    imgUrl: courseImg1,
  },

  {
    id: "02",
    title: "Indian Institutes of Technology (IITs)",
    Placement: 9000,
    students: 12.5,
    rating: 8.9,
    imgUrl: courseImg2,
  },

  {
    id: "03",
    title: "All India Institute of Medical Sciences (AIIMS)",
    Placement: 8500,
    students: 12.5,
    rating: 8.6,
    imgUrl: courseImg3,
  },
];

const Courses = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      {!isHomePage ? <Header /> : ""}
      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <div className="course__top d-flex justify-content-between align-items-center">
                <div className="course__top__left w-50">
                  <h2>
                    <b>Our Popular Colleges Listed</b>
                  </h2>
                  <p>
                    <b>
                      We invite you to explore "PREMIER COLLEGES IN INDIA" and
                      embark on your educational journey with confidence.
                      Whether you're a student in search of the perfect
                      institution or a parent guiding your child's academic
                      path, we're here to support you every step of the way.
                    </b>
                  </p>
                </div>

                <div className="w-50 text-end">
                  <button className="btn">See All</button>
                </div>
              </div>
            </Col>
            {coursesData.map((item) => (
              <Col lg="4" md="6" sm="6">
                <CourseCard key={item.id} item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Courses;
