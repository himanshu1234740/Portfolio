import React from "react";
import "./navbar.css";


export default function Navbar() {
  return (
    <div className="navbar" >
      <nav>
        <ul className="listItems">
          <li className="list contact"><a href="#contect-section" id="about" >Contact</a></li>
          <li className="list Skills"><a href="#skill-section" id="about" >Skills</a></li>
          <li className="list Portfolio"><a href="#portfolio-setion" id="about" >Portfolio</a></li>

          <li className="list about"><a href="#about-section" id="about" >About</a></li> 
          <li className="list home"><a href="#home-section" id="about" >Home</a></li>
        </ul>
      </nav>
    </div>
  );
}
