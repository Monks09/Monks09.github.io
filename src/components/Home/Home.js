import React from 'react';
import "./Home.css";
import avatar from "../../assets/img/my-avatar.jpg";

function Home(props) {
    return (
        <div className='Home' id='home'>
            <div className='titleDiv'>
                <h2>Hi, I am Mayank</h2>
                <h2>Full Stack Developer</h2>
                <a href='resume.pdf' download>Download Resume</a>
            </div>
            <div className='avatarDiv'>
                <img id='avatar' src={avatar} alt='avatar' />
            </div>
        </div>
    );
}

export default Home;