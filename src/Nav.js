import React, { useEffect, useState } from "react";
import "./Nav.css";
import netflix_logo from "./netflixlogo.jpg";
import netflix_profile from "./netflixprofile.png";

function Nav() {
  const [show, handleShow] = useState(false);

  //   useEffect(() => {
  //     window.addEventListener("scroll", () => {
  //       if (window.scrollY > 100) {
  //         handleShow(true);
  //       } else {
  //         handleShow(false);
  //       }
  //     });
  //     return () => {
  //       window.removeEventListener("scroll");
  //     };
  //   }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img className="nav_logo" src={netflix_logo} alt="netflix logo" />

      <img className="nav_avatar" src={netflix_profile} alt="netflix logo" />
    </div>
  );
}

export default Nav;
