import React,{useState} from "react";
import "./navbar.css";

export default function Navbar() {
  const [nav, setNav] = useState({
    height: '3.6rem',
    display: 'none',
    
  });
 
  const handlenavbar = ()=>{
    if(nav.height==='3.6rem'){
      setNav({
        height: '10rem',
        display: 'block',

      })
    }else{
      setNav({
        height: '3.6rem'
      })
    }
    
  }
  let width = window.innerWidth;
  console.log(width)
  return (
    
    <>
      <div className="navbar">
        <nav>
          <ul className="listItems" style={{height: nav.height}} >
            {window.innerWidth<500?<li className="list contact" style={{display: nav.display}}>
              <a href="#contect-section" className="navbarItem">
                Contact
              </a>
            </li>:<li className="list contact" >
              <a href="#contect-section" className="navbarItem">
                Contact
              </a>
            </li>}
            {window.innerWidth<500?<li className="list Skills" style={{display: nav.display}}>
              <a href="#skill-section" className="navbarItem">
                Skills
              </a>
            </li>:<li className="list Skills" >
              <a href="#skill-section" className="navbarItem">
                Skills
              </a>
            </li>}
            {window.innerWidth<500?<li className="list Portfolio" style={{display: nav.display}}>
              <a href="#portfolio-setion" className="navbarItem">
                Portfolio
              </a>
            </li>:<li className="list Portfolio">
              <a href="#portfolio-setion" className="navbarItem">
                Portfolio
              </a>
            </li>} 

            {window.innerWidth<500?<li className="list about" style={{display: nav.display}} >
              <a href="#about-section" className="navbarItem">
                About
              </a>
            </li>:<li className="list about">
              <a href="#about-section" className="navbarItem">
                About
              </a>
            </li>}
            <li className="list home">
              <a href="#home-section" className="navbarItem">
                Home
              </a>
            </li>
          </ul>
        </nav>
        <div className="NavIcon" >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 20 20"
          className="menu__icon"
          onClick={handlenavbar}
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"
          ></path>
        </svg>
      </div>
      </div>
      
    </>
  );
}
