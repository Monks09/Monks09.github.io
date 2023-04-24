import "./Navbar.css";
import { Link } from "react-scroll";

function Navbar() {
    return (
        <div className="Navbar">
            <Link className="nav-item" to="profile" spy={true} smooth={true} offset={-100} duration={500} >PROFILE</Link>
            <Link className="nav-item" to="about" spy={true} smooth={true} offset={-100} duration={500} >ABOUT</Link>
            <Link className="nav-item" to="skills" spy={true} smooth={true} offset={-100} duration={500} >SKILLS</Link>
            <Link className="nav-item" to="projects" spy={true} smooth={true} offset={-100} duration={500} >PROJECTS</Link>
            <Link className="nav-item" to="stats" spy={true} smooth={true} offset={-100} duration={500} >STATS</Link>
            <Link className="nav-item" to="contact" spy={true} smooth={true} offset={-100} duration={500} >CONTACT</Link>
        </div>
    );
}

export default Navbar;