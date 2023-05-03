import SkillCard from '../SkillCard/SkillCard';
import './Skills.css';
import htmlIcon from '../../assets/img/html-icon.svg';
import cssIcon from '../../assets/img/css-icon.svg';
import jsIcon from '../../assets/img/js-icon.svg';
import reactIcon from '../../assets/img/react-icon.svg';
import reduxIcon from '../../assets/img/redux-icon.svg';
import nodeIcon from '../../assets/img/nodejs-icon.svg';
import expressIcon from '../../assets/img/express-icon.svg';
import mongodbIcon from '../../assets/img/mongodb-icon.svg';
import githubIcon from '../../assets/img/github-icon.svg';

function Skills(props) {
    return <div className="Skills" id="skills">
        <h1 className='section-heading'>SKILLS</h1>
        <div className="skillsContainer">
            <SkillCard image={htmlIcon} skill_name="HTML" />
            <SkillCard image={cssIcon} skill_name="CSS" />
            <SkillCard image={jsIcon} skill_name="JavaScript" />
            <SkillCard image={reactIcon} skill_name="ReactJS" />
            <SkillCard image={reduxIcon} skill_name="Redux" />
            <SkillCard image={nodeIcon} skill_name="NodeJS" />
            <SkillCard image={expressIcon} skill_name="ExpressJS" />
            <SkillCard image={mongodbIcon} skill_name="MongoDB" />
            <SkillCard image={githubIcon} skill_name="Git/Github" />
        </div>
    </div>
}

export default Skills;