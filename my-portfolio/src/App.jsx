// Create a React portfolio Website
// The website must have the pages Home, about, Contact Me, and a C.V 
import React from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';

const App = () => {
  return (
    <>
      <Home />
      <About />
      <Projects />
    </>
  )
}
export default App