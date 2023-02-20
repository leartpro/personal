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
                    const delay = index * 80;
                    const emphasized = emphasizedWords.includes(word.toLowerCase());
                    return (
                        <span
                            key={index}
                            style={{
                                animation: `typing 0.8s ease-out ${delay}ms both`,
                                animationDelay: `${delay}ms`,
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
            <style>
                {`
          @keyframes typing {
            from { width: 0; }
            to { width: 100%; }
          }
        `}
            </style>
        </section>
    );
}


export default About;
