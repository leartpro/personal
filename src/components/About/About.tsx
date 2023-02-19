import React from 'react';
import '../../styles/About.css';

const About = () => {
    return (
        <div className="about-container">
            <h1>About Me</h1>
            {/* eslint-disable-next-line react/jsx-no-undef */}
            <p>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ac nulla vitae turpis lobortis convallis in vel leo.
                Fusce ut metus massa. Proin quis convallis massa, ut congue nisl.
                Vivamus sollicitudin sagittis augue.
            </p>
            <div className="animated-div">
                <h2>I am a developer</h2>
            </div>
        </div>
    );
}

export default About;
