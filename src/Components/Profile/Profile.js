import "./Profile.css";
import resume from "../../assets/Mayank_Sharma_Resume.pdf";
import avatar from "../../assets/my-avatar.jpg";

function Profile() {
    return (
        <div className="UserProfile" id="profile">
            <div className="intro-div">
                <h1>Hi, I am Mayank Sharma.</h1>
                <p>I am a Full Stack Web Developer with knowledge in Frontend and Backend technologies and I make user-friendly websites.</p>
                <button className="resume-button">
                    <a href={resume} download>Download Resume</a>
                </button>
            </div>
            <div className="avatar-div">
                <img id="avatar" src={avatar} alt="avatar" />
            </div>

        </div>
    );
}

export default Profile;