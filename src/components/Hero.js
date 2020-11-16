import React from 'react';
import Typewriter from 'components/Typewriter';
import Scrollchor from 'react-scrollchor';

class Hero extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Tendongze Godson" />
        <div className="hero-description">
        I am a fullstack web developer who is passionate about building software and 
        working with a team. I love learning new things and I welcome new ideas.<br />Check out my{' '}
          <Scrollchor to="#projects">side-projects</Scrollchor> below.
        </div>
      </div>
    );
  }
}

export default Hero;
