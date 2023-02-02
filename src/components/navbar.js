import React from 'react';
import { Link } from "react-router-dom";
import "../styles/nav.css";

function navbar() {

  return (
    <div classname="navbar">
        <div className="barButton">
      
        <button type="button">home</button>

        </div>
        <div className="links">
            <Link to="/home"> Paul.c </Link>
            <Link to="/skills">tech-skills</Link>
            <Link to="/repos">git-repos</Link>

        </div>
    </div>
  )
}

export default navbar;


