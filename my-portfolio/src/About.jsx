import React from 'react'

function About() {
    const certifications = [
        <a href="https://www.credly.com/badges/6e4404bb-deda-4b26-8868-02eb2ff38383/public_url" target="_blank">Certiport IT specialist - HTML and CSS</a>,
        <a href="https://www.credly.com/badges/6ede6d12-e6e5-4ddc-b893-53f28bbde155/public_url" target="_blank">Certiport IT specialist - Javascript</a>,
        <a href="https://www.credly.com/badges/bbc67a6d-ce60-40b4-b4a7-e441bfe63aa9/public_url" target="_blank">Certiport IT specialist - Python</a>,
        <a href="https://cs50.harvard.edu/certificates/380821d4-d35b-459a-8a65-c2b27a95f1e4" target="_blank">Harvard's CS50X</a>,
        <a href="https://cs50.harvard.edu/certificates/b74f7b2d-c762-42ac-83c9-2879db5c0416" target="_blank"> Harvard's CS50P</a>,
    ]
    const certificationsList = certifications.map(certificates => <li className='certificates'>{certificates}</li>)
    return (
    <section id='about' className='section fade-in'>
        <div className="container">
        <h3>About Me</h3>
        <p className='about-me'>I'm a passionate software developer eager to contribute to innovative
            projects. While my professional journey is just beginning, I've dedicated
            myself to building a strong foundation in software development through
            hands-on projects and continuous learning. This portfolio showcases my
            skills in Python, JavaScript, React, Django and Flask and demonstrates my
            ability to tackle challenging problems with creative solutions. I'm a quick
            learner, I thrive in collaborative environments, and I'm excited to bring my
            enthusiasm and dedication to a dynamic team. I'm always looking for opportunities
            to expand my knowledge and contribute meaningfully to real-world projects.
        </p>
        <div className='certificate-container'>
            <h3>Certificates</h3>
            <ul className='certificates-list'>
                {certificationsList}
            </ul>
        </div>
        </div>
    </section>
    )
}
export default About