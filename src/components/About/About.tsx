import React, {useEffect, useState} from 'react';
import {Typography} from "@mui/material";
import axios from 'axios';
import Typewriter from 'react-ts-typewriter';


const About = () => {
    const [text, setText] = useState('');
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    let lines: string[] = text.split("\n");


    useEffect(() => {
        axios.get('./Content/About.txt').then((response) => {
            setText(response.data);
        });
    }, []);

    const handleTypewriterFinish = () => {
        if (currentLineIndex < lines.length - 1) {
            setCurrentLineIndex(currentLineIndex + 1);
        }
    };

    return (
        <section id="about">
            <h1>About Me</h1>
            <Typography style={{marginLeft: '10%', marginRight: '10%', whiteSpace: 'pre'}}>
                <Typewriter
                    text={text}
                    speed={0.1}
                    loop={false}
                    cursor={true}
                />
            </Typography>
            {
                    lines.slice(0, currentLineIndex + 1).map((line, index) => (
                        <Typography style={{marginLeft: '10%', marginRight: '10%', whiteSpace: 'pre'}}>
                            <Typewriter
                                text={line}
                                speed={0.1}
                                loop={false}
                                cursor={false}
                                delay={index > 0 ? (lines[index - 1].length) * 10 : 0}
                                onFinished={index === currentLineIndex ? handleTypewriterFinish : undefined}
                            />
                        </Typography>
                    ))}
        </section>
    );
}

export default About;
