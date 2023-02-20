import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import axios from 'axios';

const About = () => {
    const [text, setText] = useState('');

    useEffect(() => {
        axios.get('./Content/About.txt').then((response) => {
            setText(response.data);
        });
    }, []);

    const emphasizedWords = ['programming', 'software development', 'technologies', 'algorithmic', 'creative solutions'];

    return (
        <section id="about">
            <h1>About Me</h1>
            <Typography style={{ wordWrap: 'break-word'}}>
                {text.split(' ').map((word, index) => {
                    const emphasized = emphasizedWords.includes(word.toLowerCase());
                    return (
                        <span
                            key={index}
                            style={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: emphasized ? '#2e7d32' : 'inherit',
                                fontWeight: emphasized ? 'bold' : 'normal',
                                textDecoration: emphasized ? 'underline' : 'none',
                                textUnderlineOffset: emphasized ? '2px' : 'none',
                            }}
                        >
              {word}{'\u00A0'}
            </span>
                    );
                })}
            </Typography>
        </section>
    );
}


export default About;
