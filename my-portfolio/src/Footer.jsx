import react from 'react';

function Footer() {
    const date = new Date();
    return (
        <section>
            <p>&copy; {date.getFullYear()} Mamello</p> <a href='https://www.linkedin.com/in/mamello-molokwane-2b3b04213' target='_blank'>
                        <i className='fab fa-linkedin'>Linkedin  </i>
                    </a> <a href='mailto:mamellomolokwane10@gmail.com' target='_blank'>
                        <i className='fab fa-envelope'>Email </i>
                    </a>
        </section>
    )
}
export default Footer