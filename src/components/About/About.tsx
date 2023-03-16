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

    return (
        <section id="about">
            <h1>About Me</h1>
            This is a <span className="type" >CSS only solution for a multi-line typewriter effect.</span>
            <Typography className="typewriter">{text}</Typography>
        </section>
    );
}

export default About;
