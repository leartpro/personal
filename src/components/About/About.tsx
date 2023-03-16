import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import axios from 'axios';
import './about..scss'

const About = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        axios.get('./Content/About.txt').then((response) => {
            setText(response.data);
        });
    }, []);

    const emphasizedWords = ['programming', 'software', ' development', 'technologies', 'algorithmic', 'creative solutions'];

    return (
        <section id="about">
            <h1>About Me</h1>
            <Typography className="test">{text}</Typography>
        </section>
    );
}

export default About;
