function ProjectCard({ image, title, subTitle, desc, tech_stack, github_link, website_link }) {
    return <div className="ProjectCard">
        <div className="proj-imgbx">
            <img src={image} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{subTitle}</span>
            </div>
        </div>
        <div>
            <h1>{title}</h1>
            <p>{desc}</p>
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