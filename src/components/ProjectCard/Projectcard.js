import './ProjectCard.css';

function ProjectCard({ image, title, desc, tech_stack, github_link, website_link }) {
    return <div className="project-card">
        <div>
            <img src={image} alt='project-img' />
        </div>
        <div>
            <h1 className='project-title'>{title}</h1>
            <p className='project-description'>{desc}</p>
            <div className="tagsDiv" >
                <span>Tech Stack:</span>
                {
                    tech_stack.map((el) => {
                        return <span className="project-tech-stack">{el}</span>
                    })
                }
            </div>
            <div className="linksDiv">
                <a className='project-github-link' href={github_link} target="_blank" rel="noreferrer"><i class="fa-brands fa-github"></i>Github</a>
                <a className='project-deployed-link' href={website_link} target="_blank" rel="noreferrer"><i class="fa-regular fa-life-ring"></i>Live</a>
            </div>

        </div>
    </div>
}

export default ProjectCard;