// Home page: Profile picture(optional). 
import React from 'react'

function Home() {
    return (
            <header id='home'>
                <div className="container">
                <nav id='nav-bar'>
                    <a href='#home'>Home </a> 
                    <a href='#about'> About </a>
                    <a href='#projects'>Projects </a>
                    <a href='#contact'>Contact Me</a>
                    <a href="/C.V.pdf" target="_blank" rel="noopener noreferrer"> Resume</a>
                </nav>
                <h1 className='greeting'>Hi, my name is Mamello Molokwane</h1>
                </div>
            </header>
    )
}
export default Home