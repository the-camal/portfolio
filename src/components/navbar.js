import React from 'react';
import { Link } from "react-router-dom";

function navbar() {
  return (
    <div className="navbar">
        <div className="barButton">
            
            <button></button>
        </div>
        <div className="links">
            <Link to="/home"> home </Link>
            <Link to="/skills">tech-skills</Link>
            <Link to="/repos">git-repos</Link>
        </div>
    </div>
  )
}

export default navbar;


