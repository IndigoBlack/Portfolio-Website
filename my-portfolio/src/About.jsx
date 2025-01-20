import React from 'react'

function About() {
    const HTML_CSS = <a href="https://www.credly.com/badges/6e4404bb-deda-4b26-8868-02eb2ff38383/public_url" target="_blank">HTML and CSS</a>
    const CS50X = <a href="https://cs50.harvard.edu/certificates/380821d4-d35b-459a-8a65-c2b27a95f1e4" target="_blank">CS50X</a>
    const CS50P = <a href="https://cs50.harvard.edu/certificates/b74f7b2d-c762-42ac-83c9-2879db5c0416" target="_blank">CS50P</a>
    const Javascript = <a href="https://www.credly.com/badges/6ede6d12-e6e5-4ddc-b893-53f28bbde155/public_url" target="_blank">Javascript</a>
    const Python = <a href="https://www.credly.com/badges/bbc67a6d-ce60-40b4-b4a7-e441bfe63aa9/public_url" target="_blank">Python</a>
    return (
    <section>
        <h3>About Me</h3>
        <p>A little about me. I am an aspiring software developer that is passionate about building and maintaining software.
        I've build many projects in {CS50X}, and {CS50P} in HTML, CSS, Javascript, 
        Python and Flask, and also some personal projects in those languages and frameworks as well as Django. 
        I've also obtained internationally accredited Certiport certificates in { HTML_CSS }, {Javascript}, and {Python} 
         I'm someone who always aims to get the job done and always looking to learn and improve.</p>
    </section>
    )
}
export default About