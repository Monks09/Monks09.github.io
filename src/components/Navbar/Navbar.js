import React from 'react';
import { Link } from "react-scroll";
import "./Navbar.css";

function Navbar(props) {
    return (
        <div className='navbar' id='nav-menu'>
            <div className='logo-div'>
                <h2 id='logo'>Mayank</h2>
            </div>
            <div className='nav-links-div'>
                <Link className="nav-link home" to="home" spy={true} smooth={true} offset={-100} duration={200} >HOME</Link>
                <Link className="nav-link about" to="about" spy={true} smooth={true} offset={-100} duration={200} >ABOUT</Link>
                <Link className="nav-link skills" to="skills" spy={true} smooth={true} offset={-100} duration={200} >SKILLS</Link>
                <Link className="nav-link projects" to="projects" spy={true} smooth={true} offset={-100} duration={200} >PROJECTS</Link>
                <Link className="nav-link stats" to="github-stats" spy={true} smooth={true} offset={-100} duration={200} >GITHUB STATS</Link>
                <Link className="nav-link contact" to="contact" spy={true} smooth={true} offset={-100} duration={200} >CONTACT ME</Link>

                <div className="nav-link resume">
                    <a id='resume-link-1' href='https://onedrive.live.com/?cid=A614D610FBFFBACB&id=A614D610FBFFBACB%21523459&parId=A614D610FBFFBACB%21523191&o=OneUp' target="_blank" rel="noreferrer" >RESUME</a>
                </div>
            </div>
        </div>
    );
}

export default Navbar;