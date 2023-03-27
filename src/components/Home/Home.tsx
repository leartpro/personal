import React from 'react';
import {Parallax} from "react-parallax";
import {Typography} from "@mui/material";

function Home() {
    return (
        <section id={"home"}>
            <Parallax
                blur={0}
                bgImage={"./images/portrait.png"}
                bgImageAlt="It's Me"
                strength={300}
                style={{
                    height: '700px',
                    width: '700px',
                    left: '65%',
                    top: '50px',
                    transform: 'translate(-50%, 0%)'
                }}
            />
            <div style={{
                color: 'black',
                textAlign: 'center',
                position: 'absolute',
                top: 0,
                bottom: '20%',
                left: 0,
                right: '50%',
                height: 'fit-content',
                margin: 'auto'
            }}>
                <Typography style={{
                    font: 'italic 32px roboto',
                }}>
                    Hi, I'm
                </Typography>
                <Typography style={{
                    font: 'bold 64px roboto',
                }}>
                    Lennart Protte
                </Typography>
            </div>

        </section>

    );
}

export default Home;
