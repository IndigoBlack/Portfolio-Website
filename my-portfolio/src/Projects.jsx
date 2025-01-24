import React from 'react';

function Projects() {
    // Create the projects in a list of objects and display the projects using the map function
    const projects = [
        {
            id: 1,
            name: "Pokedex: A JavaScript Application",
            description: "This is a simple Pokedex application built with HTML, CSS, and JavaScript. It fetches data from the PokeAPI to display Pokemon information and allows searching by name.",
            code: "https://github.com/IndigoBlack/Displayed-projects/blob/main/script.js",
            website: "https://personal-pokedex.netlify.app/",
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
        <a href={project.code} target='_blank'>Code</a> | <a href={project.website} target='_blank'>Website</a>
    </li>)
    return (
        <section id='projects'>
            <h2>Projects</h2>
            <ul className='projects'>
                {projectList}
            </ul>
        </section>
    )
}
export default Projects