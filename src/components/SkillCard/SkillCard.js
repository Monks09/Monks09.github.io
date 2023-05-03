import './SkillCard.css';

function SkillCard({image, skill_name}) {
    return <div className="skills-card"> 
        <img className='skills-card-img' src={image} alt="card" width="70px" height="70px"/>
        <p className='skills-card-name'>{skill_name}</p>
    </div>
}

export default SkillCard;