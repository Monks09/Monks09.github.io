import './ProjectCard.css';

function ProjectCard({ image, title, description, type, tech_stack, github_link, website_link }) {
    return <div className="ProjectCard">
        <div>
            <img src={image} alt='project-img' />
        </div>
        <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <p style={{ fontWeight: "bold" }}>{type}</p>
            <div className="tagsDiv">
                <span>Tech Stack:</span>
                {
                    tech_stack.map((el) => {
                        return <span className="tech-name">{el}</span>
                    })
                }
            </div>
            <div className="linksDiv">
                <a href={github_link} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i>Github</a>
                <a href={website_link} target="_blank" rel="noreferrer"><i class="fa-regular fa-life-ring"></i>Live</a>
            </div>

        </div>
    </div>
}

export default ProjectCard;