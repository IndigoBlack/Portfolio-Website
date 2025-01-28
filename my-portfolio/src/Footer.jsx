import react from 'react';

function Footer() {
    const date = new Date();
    return (
        <footer>
            <div className="container">
                &copy; Copyright {date.getFullYear()} Mamello
            </div>
        </footer>
    )
}
export default Footer