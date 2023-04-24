import SkillCard from '../SkillCard/SkillCard';
import './Skills.css';
import htmlIcon from "../../assets/icons/html-icon.png";
import cssIcon from "../../assets/icons/css-icon.png";
import jsIcon from "../../assets/icons/js-icon.png";
import reactIcon from "../../assets/icons/react-icon.png";
import reduxIcon from "../../assets/icons/redux-icon.svg";
import nodejsIcon from "../../assets/icons/nodejs-icon.svg";
import expressIcon from "../../assets/icons/express-icon.svg";
import mongodbIcon from "../../assets/icons/mongodb-icon.svg";
import githubIcon from "../../assets/icons/github-icon.png";

function Skills(props) {
    return <div className="Skills" id="skills">
        <h1 className='section-heading'>SKILLS</h1>
        <div className="skillsContainer">
            <SkillCard image={htmlIcon} skill_name="HTML" />
            <SkillCard image={cssIcon} skill_name="CSS" />
            <SkillCard image={jsIcon} skill_name="JavaScript" />
            <SkillCard image={reactIcon} skill_name="ReactJS" />
            <SkillCard image={reduxIcon} skill_name="Redux" />
            <SkillCard image={nodejsIcon} skill_name="NodeJS" />
            <SkillCard image={expressIcon} skill_name="ExpressJS" />
            <SkillCard image={mongodbIcon} skill_name="MongoDB" />
            <SkillCard image={githubIcon} skill_name="Git/Github" />
        </div>
    </div>
}

export default Skills;