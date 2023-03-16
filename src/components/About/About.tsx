import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import axios from 'axios';
import Typewriter from 'react-ts-typewriter';


const About = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        axios.get('./Content/About.txt').then((response) => {
            setText(response.data);
        });
    }, []);

    return (
        <section id="about">
            <h1>About Me</h1>
            <Typography>
                {/*TODO: use onFinish Hook from Typewriterto display line by line*/}
                <Typewriter text={text} speed={10} loop={false} cursor={true} />
            </Typography>
        </section>
    );
}

export default About;
