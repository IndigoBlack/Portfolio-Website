import react from 'react'

function Contact() {
    return (
        <section id='contact' className='section fade-in'>
            <div className="container">
            <h3>Contact Me</h3>
            <p className='contact-para'>Feel free to reach out to me via email or through my social media channels.</p>
            <ul className='social-links'>
            <li> <a href='mailto:mamellomolokwane10@gmail.com' className='email-link' target='_blank'>
                    <i className='fab fa-envelope'> Email </i>
                </a>
            </li>
            <li> <a href='https://github.com/IndigoBlack' target='_blank'> 
                    <i className="fab fa-github"> Github </i>
                </a>
            </li>
            <li><a href='https://www.linkedin.com/in/mamello-molokwane-2b3b04213' className='linkedin-link' target='_blank'>
                    <i className='fab fa-linkedin'>Linkedin  </i>
                </a>
            </li>
            </ul>
            </div>
        </section>
    )
}
export default Contact