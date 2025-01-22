import React from 'react';

function Projects() {
    // Create the projects in a list of objects and display the projects using the map function
    const projects = [
        {
            id: 1,
            name: "Project 1",
            description: "Project description",
            code: "Link to code",
            website: "Link to website",
        },
        {
            id: 2,
            name: "Project 2",
            description: "Project description",
            code: "Link to code",
            website: "Link to website",
        },
        {
            id: 3,
            name: "Project 3",
            description: "Project description",
            code: "Link to code",
            website: "Link to website",
        },
        {
            id: 4,
            name: "Project 4",
            description: "Project description",
            code: "Link to code",
            website: "Link to website",
        },
    ]
    const projectList = projects.map(project => <li key={project.id}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.code}>Code</a> | <a href={project.website}>Website</a>
    </li>)
    return (
        <section id='projects'>
            <h2>Projects</h2>
            <ul>
                {projectList}
            </ul>
        </section>
    )
}
export default Projects