import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"
import htmlIcon from "../assets/img/html-icon.png";
import cssIcon from "../assets/img/css-icon.png";
import jsIcon from "../assets/img/js-icon.png";
import reactIcon from "../assets/img/react-icon.png";
import reduxIcon from "../assets/img/redux-icon.svg";
import nodeIcon from "../assets/img/nodejs-icon.svg";
import expressIcon from "../assets/img/express-icon.svg";
import mongodbIcon from "../assets/img/mongodb-icon.svg";
import githubIcon from "../assets/img/github-icon.png";


const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2 className="section-heading">Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={htmlIcon} alt="Image" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <img src={cssIcon} alt="Image" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={jsIcon} alt="Image" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                    <img src={reactIcon} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={reduxIcon} alt="Image" />
                                    <h5>Redux</h5>
                                </div>
                                <div className="item">
                                    <img src={nodeIcon} alt="Image" />
                                    <h5>NodeJS</h5>
                                </div>
                                <div className="item">
                                    <img src={expressIcon} alt="Image" />
                                    <h5>ExpressJS</h5>
                                </div>
                                <div className="item">
                                    <img src={mongodbIcon} alt="Image" />
                                    <h5>MongoDB</h5>
                                </div>
                                <div className="item">
                                    <img src={githubIcon} alt="Image" />
                                    <h5>Github</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <img className="background-image-left" src={colorSharp} alt="Image" />
        </section>
    )
}

export default Skills;