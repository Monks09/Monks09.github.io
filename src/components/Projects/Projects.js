import './Projects.css';
import ProjectCard from '../ProjectCard/Projectcard';
import projectImg1 from '../../assets/img/project_image_1.png';
import projectImg2 from '../../assets/img/project_image_2.png';
import projectImg3 from '../../assets/img/project_image_3.png';
import projectImg4 from '../../assets/img/project_image_4.png';


function Projects(props) {
    const projects = [
        {
            title: "Quora",
            image: projectImg4,
            desc: "Quora is a social media website to gain and share knowledge. Here users can ask questions and get answers on a variety of topics.",
            tech_stack: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS", "ExpressJS", "MongoDB"],
            github_link: "",
            website_link: "",
        },
        {
            title: "MyFitnessPal",
            image: projectImg3,
            desc: "MyFitnessPal is a health and fitness tracker application.",
            tech_stack: ["HTML", "CSS", "JavaScript", "JSON-Server", "React", "Redux"],
            github_link: "",
            website_link: "",
        },
        {
            title: "Asos",
            image: projectImg2,
            desc: "Asos is an online clothing and accessories store for men and women.",
            tech_stack: ["HTML", "CSS", "JavaScript", "JSON-Server"],
            github_link: "",
            website_link: "",
        },
        {
            title: "Bewakoof",
            image: projectImg1,
            desc: "Bewakoof.com is an online shopping store with specially designed and curated products for the young generation.",
            tech_stack: ["HTML", "CSS", "JavaScript"],
            github_link: "",
            website_link: "",
        }
    ]
    return <div className="Projects" id="projects">
        <h1 className='section-heading'>PROJECTS</h1>
        {
            projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />
            })
        }
    </div>
}

export default Projects;