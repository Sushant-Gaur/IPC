import React, { useRef } from "react";
import { Container } from "reactstrap";
import "./header.css";
const navLinks = [
  {
    display: "Home",
    url: "#",
  },
  {
    display: "About",
    url: "../About-us",
  },

  {
    display: "College",
    url: "#",
  },
  {
    display: "Pages",
    url: "#",
  },
];

const HeaderLoggedIn = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className="header">
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className=" d-flex align-items-center gap-1">
              <i class="ri-pantone-line"></i>𝗜𝗡𝗗𝗜𝗔'𝘀 𝗣𝗥𝗘𝗠𝗜𝗘𝗥 𝗖𝗢𝗟𝗟𝗘𝗚𝗘𝗦
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div className="nav__menu" ref={menuRef} onClick={menuToggle}>
              <ul className="nav__list">
                {navLinks.map((item, index) => (
                  <li key={index} className="nav__item">
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className="mb-0 d-flex align-items-center gap-2">
                <i class="ri-phone-line"></i> +91 8355010510
              </p>
            </div>
          </div>

          <div className="mobile__menu">
            <span>
              <i class="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default HeaderLoggedIn;
