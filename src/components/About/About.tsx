import React from 'react';
import '../../styles/About.css';
import {Typography} from "@mui/material";

const About = () => {
    return (
        <section id={"about"}>
            <h1>About Me</h1>
            <Typography>
                Lorem ipsum dolor sit amet,
                consectetur adipiscing elit. Sed ac nulla vitae turpis lobortis convallis in vel leo.
                Fusce ut metus massa. Proin quis convallis massa, ut congue nisl.
                Vivamus sollicitudin sagittis augue.
            </Typography>
        </section>
    );
}

export default About;
