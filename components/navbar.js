import React from 'react'

function navbar() {
  return (
    <div className="navbar">
        <div className="barButton">
            
            <Button></Button>
        </div>
        <div className="links">
            <link to="/home"> home </link>
            <link to="/skills">tech-skills</link>
            <link to="/repos">git-repos</link>
        </div>
    </div>
  )
}

export default navbar


