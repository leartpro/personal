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
            <Typography display="block" style={{whiteSpace: 'pre', textAlign: "left", height: '307px'}}>
                <Typewriter
                    text={text}
                    speed={0}
                    loop={false}
                    cursor={false}
                />
            </Typography>
        </section>
    );
}

export default About;
