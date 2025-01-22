// Home page: Profile picture(optional). 
import React from 'react'

function Home() {
    return (
        <section id='home'>
            <header>
                <nav>
                    <a href='#home'>Home </a> 
                    <a href='#about'> About </a>
                    <a href='#projects'>Projects </a>
                    <a href='https://www.linkedin.com/in/mamello-molokwane-2b3b04213' target='_blank'>
                        <i className='fab fa-linkedin'>Linkedin  </i>
                    </a>
                    <a href='https://github.com/IndigoBlack' target='_blank'> Github </a>
                    <a href='mailto:mamellomolokwane10@gmail.com' target='_blank'>
                        <i className='fab fa-envelope'>Email </i>
                    </a>
                    <a href="/Resume.pdf" target="_blank" rel="noopener noreferrer"> Resume</a>
                </nav>
            </header>
            <h2>Welcome to my Portfolio Website</h2>
            
        </section>
    )
}
export default Home