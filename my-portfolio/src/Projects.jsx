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
            name: "Flashcards",
            description: "This is a simple web application for creating and studying flashcards. Users can create flashcards with a title, question, and answer, and then review them in a randomized order. The app tracks the user's progress by allowing them to mark cards as 'known' or 'unknown.'",
            code: "https://github.com/IndigoBlack/JavaScript-projects",
            website: "https://javascript-projects-xklj.onrender.com/",
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
    const projectList = projects.map(project => <li className='project-card' key={project.id}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.code} target='_blank'>Code</a> | <a href={project.website} target='_blank'>Website</a>
    </li>)
    return (
        <section id='projects' className='section fade-in'>
            <div className="container">
            <h2>Projects</h2>
            <ul className='projects'>
                {projectList}
            </ul>
            </div>
        </section>
    )
}
export default Projects