import './Projects.css';
import ProjectCard from '../ProjectCard/Projectcard';
import projectImage1 from "../../assets/project-images/project_image_1.png";
import projectImage2 from "../../assets/project-images/project_image_2.png";
import projectImage3 from "../../assets/project-images/project_image_3.png";
import projectImage4 from "../../assets/project-images/project_image_4.png";

function Projects(props) {
    const projects = [
        {
            title: "Quora",
            image: projectImage4,
            description: "Quora is a social media website to gain and share knowledge. Here users can ask questions and get answers on a variety of topics.",
            type: "A collaborative project, built in 5 days by a team of 4 developers.",
            tech_stack: ["HTML", "CSS", "JavaScript", "React", "Redux", "NodeJS", "ExpressJS", "MongoDB"],
            github_link: "",
            website_link: "",
        },
        {
            title: "MyFitnessPal",
            image: projectImage3,
            description: "MyFitnessPal is a health and fitness tracker application.",
            type: "A collaborative project, built in 5 days by a team of 4 developers.",
            tech_stack: ["HTML", "CSS", "JavaScript", "React", "Redux"],
            github_link: "",
            website_link: "",
        },
        {
            title: "Asos",
            image: projectImage2,
            description: "Asos is an online clothing and accessories store for men and women.",
            type: "A collaborative project, built in 5 days by a team of 5 developers.",
            tech_stack: ["HTML", "CSS", "JavaScript"],
            github_link: "",
            website_link: "",
        },
        {
            title: "Bewakoof",
            image: projectImage1,
            description: "Bewakoof.com is an online shopping store with specially designed and curated products for the young generation.",
            type: "A collaborative project, built in 5 days by a team of 4 developers.",
            tech_stack: ["HTML", "CSS", "JavaScript"],
            github_link: "",
            website_link: "",
        },

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