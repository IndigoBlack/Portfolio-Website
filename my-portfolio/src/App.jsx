// Create a React portfolio Website 
// The website must have the pages Home, about, Contact Me, Projects, and a C.V
// Contact me form(Optional)
import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Footer from './Footer';
import Contact from './Contact';

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}
export default App