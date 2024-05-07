import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../../assests/images/student.png";
import "./hero-section.css";
import SearchBar from "./SearchBar";
import SearchResultsList from "./SearchResultsList";

const HeroSection = () => {
  const [results, setResults] = useState([]);
  console.log("reuslts i herosection :" + results);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                🅰🅽🆈🆃🅸🅼🅴 🅰🅽🆈🆆🅷🅴🆁🅴 <br /> 🅳🅸🆂🅲🅾🆅🅴🆁🅸🅽🅶 🅸🅽🅳🅸🅰'🆂 <br />
                🅰🅲🅰🅳🅴🅼🅸🅲 🅶🅴🅼🆂
              </h2>
              <p className="mb-5">
                <b>
                  Our platform is a treasure trove of insights, guiding you to
                  the most prestigious colleges and universities across India.
                  We understand that choosing the right institution is pivotal,
                  and that's why we've meticulously curated a collection of
                  academic gems.
                </b>
              </p>
            </div>
            {/* <div className="search"> */}
            {/* <input type="text" placeholder="Search" />
              <button className="btn">Search</button> */}

            {/* </div> */}
            <SearchBar setResults={setResults} />
            <SearchResultsList results={results} />
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
