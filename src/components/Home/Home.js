import React from 'react';
import "./Home.css";
import avatar from "../../assets/img/my-avatar.jpg";

function Home(props) {
    return (
        <div className='home-section' id='home'>
            <div className='overlay'></div>
            <div className='titleDiv'>
                <h2>Hi, I am Mayank</h2>
                <h2>Full Stack Developer</h2>
                <div className='resume-div' >
                    <a id='resume-link-2' href='resume.pdf' target='_blank' rel="noreferrer" download>Download CV</a>
                </div>
            </div>
            <div className='avatarDiv'>
                <img id='avatar' className='home-img' src={avatar} alt='avatar' />
            </div>
        </div>
    );
}

export default Home;