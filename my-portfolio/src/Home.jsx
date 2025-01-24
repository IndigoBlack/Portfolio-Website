// Home page: Profile picture(optional). 
import React from 'react'

function Home() {
    return (
        <section id='home'>
            <header>
                <nav id='nav-bar'>
                    <a href='#home'>Home </a> 
                    <a href='#about'> About </a>
                    <a href='#projects'>Projects </a>
                    <a href='https://github.com/IndigoBlack' target='_blank'> <i class="fab fa-github"> Github </i></a>
                    
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"> Resume</a>
                </nav>
            </header>
            <h2 className='greeting'>Welcome to my Portfolio Website</h2>
            
        </section>
    )
}
export default Home