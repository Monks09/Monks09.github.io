import React from 'react';
import "./Home.css";
import avatar from "../../assets/img/my-avatar.jpg";
import backgroundImg from "../../assets/img/portfolio-bg.jpg";

function Home(props) {
    return (
        <div className='home-section' id='home'>
            <img id='background-img' src={backgroundImg} alt='background' />
            <div className='container'>
                <div className='titleDiv'>
                    <h2>Hi, I am Mayank</h2>
                    <h2>Full Stack Developer</h2>
                    <div className='resume-div' >
                        <button id='resume-button-2'>
                            <a id='resume-link-2' href='resume.pdf' target='_blank' rel="noreferrer" download>Download CV</a>
                        </button>
                    </div>
                </div>
                <div className='avatarDiv'>
                    <img id='avatar' className='home-img' src={avatar} alt='avatar' />
                </div>
            </div>
        </div>
    );
}

export default Home;