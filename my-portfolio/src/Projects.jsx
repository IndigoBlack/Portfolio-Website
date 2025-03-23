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
            name: "Wiki Summariser",
            description: "This is a Django web application that allows users to search for Wikipedia articles on a topic of their choice. Once an article is selected, the application fetches the introductory section (overview) of the article and summarizes it using a Hugging Face Transformers model (specifically, a summarization pipeline). The user is then presented with the summarized text along with a link to the full Wikipedia page.",
            code: "https://github.com/IndigoBlack/Wiki-Summariser-web",
        },
        {
            id: 4,
            name: "Portfolio Website",
            description: "This is the website you are currently viewing. Here I introduce myself, my certifications and my projects. It also includes my contact details and my resume.",
            code: "https://github.com/IndigoBlack/Portfolio-Website/tree/main/my-portfolio",
            website: "https://portfolio-website-esm8.onrender.com",
        },
        {
            id: 5,
            name: "LED Quizz",
            description: "Quizz Me is a Python-based trivia game designed to test your knowledge and provide immediate feedback through LEDs. It retrieves questions and answers from the Open Trivia Database API (https://opentdb.com/), offering a wide range of general knowledge topics. The game uses two LEDs (green and red) to indicate correct and incorrect answers, enhancing the user experience. The game is also structured in A-D format to make easier for the user to answer.",
            code: "https://github.com/IndigoBlack/LED-Quiz"
        },
        {
            id: 6,
            name: "Simple Flask To-Do",
            description: "A simple Task manager app to create, delete a task. The tasks are saved to a sqlite database. The project is not finished as I have not styled it yet",
            code: "https://github.com/IndigoBlack/Flask-projects/tree/main/Flask-Todo"
        },
        {
            id: 7,
            name: "Social media website",
            description: "This is a social media website I am currently working on. The Website is created using Flask and a sqlite database. The website would the functionalites of any social media website like following, commenting and posting. The website is not finished yet.",
            code: "https://github.com/IndigoBlack/Flask-projects/tree/main/ChatApp"
        }
    ]
    const projectList = projects.map(project => <li className='project-card' key={project.id}>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <a href={project.code} target='_blank'>Code</a> | {project.website && <a href={project.website} target='_blank'>Website</a>}
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