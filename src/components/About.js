import { Link } from 'react-router-dom'
import React from 'react';
const About = () => {
  return (
    <div className='about'>
      <h4>Version 1.0.0</h4>
      <h4>Property of <a href="mailto:somyajitchppr@gmail.com">Somyajit Chakraborty</a></h4>
      <h4>Developed by Team <a href="https://breadandcode.tech">Bread and Code</a></h4>
      <Link to='/'>Go Back</Link>
    </div>
  );
};

export default About;