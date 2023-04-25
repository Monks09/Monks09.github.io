import ProjectCard from "./ProjectCard";
import projectImg1 from "../assets/img/project_image_1.png";
import projectImg2 from "../assets/img/project_image_2.png";
import projectImg3 from "../assets/img/project_image_3.png";
import projectImg4 from "../assets/img/project_image_4.png";



function Projects(props) {

    const projects = [
        {
            image: projectImg4,
            title: "Quora",
            subTitle: "Blogs and QnA website",
            desc: "Quora is a social media website to gain and share knowledge. Here users can ask questions and get answers on a variety of topics.",
            type: "Collaborative Project",
            tech_stack: ["HTML", "CSS", "JS", "React", "Redux", "NodeJS", "ExpressJS", "MongoDB"],
            github_link: "",
            website_link: ""
        },
        {
            image: projectImg3,
            title: "MyFitnessPal",
            subTitle: "Health Tracker website",
            desc: "MyFitnessPal is a health and fitness tracker application",
            type: "Collaborative Project",
            tech_stack: ["HTML", "CSS", "JS", "React", "Redux"],
            github_link: "",
            website_link: ""
        },
        {
            image: projectImg2,
            title: "Asos",
            subTitle: "Clothing and Apparel website",
            desc: "Asos is an online clothing and accessories store for men and women",
            type: "Collaborative Project",
            tech_stack: ["HTML", "CSS", "JavaScript", "JSON-Server"],
            github_link: "",
            website_link: ""
        },
        {
            image: projectImg1,
            title: "Bewakoof",
            subTitle: "E-Commerce website",
            desc: "Bewakoof.com is an online shopping store with specially designed and curated products for the young generation.",
            type: "Collaborative Project",
            tech_stack: ["HTML", "CSS", "JavaScript"],
            github_link: "",
            website_link: ""
        }
    ]

    return <div className="Projects" id="projects">
        <h2>Projects</h2>
        {
            projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />
            })
        }
    </div>
}

export default Projects;