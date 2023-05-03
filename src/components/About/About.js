import './About.css';

function About(props) {
    return <div className="about-section" id="about">
        <h1 className='section-heading'>About</h1>
        <p>My name is <span id='user-detail-name'>Mayank Sharma</span>, <span id='user-detail-intro'>I am from Kolkata, India. Passionate Full Stack Web Developer with skills in the MERN stack, I have learned Full Stack Web Development in Masai school.</span> Skilled in problem-solving and execution of software tasks from start to finish. I look forward to joining a company where I can contribute to individual and company growth.</p>
    </div>
}

export default About;