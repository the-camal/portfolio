import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import "../styles/navbar.css";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function NavBar() {
  const [expandNavBar, setExpandNavBar] = useState(false);
  
  const location = useLocation();
  useEffect(() => {
    setExpandNavBar(false);
  }, [location]);
  return (
    <div classname="navbar" id={expandNavBar ? "open" : "close"}>
        <div className="barButton">
      
        <button
        onClick={() => {
          setExpandNavBar((prev) => !prev);
        }}
        >
           < ExpandMoreIcon ></ExpandMoreIcon>
           </button>
        </div>
        <div className="links">
            <Link to="/home"> Home </Link>
            <Link to="/skills">tech-skills</Link>
            <Link to="/repos">git-repos</Link>

        </div>
    </div>
  )
}

export default NavBar;


