import React, {useState} from "react";
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@mui/material";


function scrollToAnchor(event: React.MouseEvent, anchorId: string) {
    event.preventDefault();
    const element = document.getElementById(anchorId);
    if (element) {
        element.scrollIntoView({behavior: "smooth", block: "start"});
    }
}

function Header() {
    const [navText, setNavText] = useState('Home');

    function updateNavText(text: string) {
        setNavText(text);
    }

    return (
        <AppBar>
            <Grid container spacing={12}>
                <Grid item xs={6}>
                    <Typography style={{alignSelf: 'flex-start'}}><h2>{navText}</h2></Typography>
                </Grid>
                <Grid item xs={6}>
                    <Toolbar style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        <IconButton href="#home" onClick={(event) => {
                            scrollToAnchor(event, "home");
                            updateNavText("Home");
                        }}>Home</IconButton>
                        <IconButton href="#about" onClick={(event) => {
                            scrollToAnchor(event, "about");
                            updateNavText("About");
                        }}>About</IconButton>
                        <IconButton href="#my-journey" onClick={(event) => {
                            scrollToAnchor(event, "my-journey");
                            updateNavText("My Journey");
                        }}>My Journey</IconButton>
                        <IconButton href="#blog" onClick={(event) => {
                            scrollToAnchor(event, "blog");
                            updateNavText("Blog");
                        }}>Blog</IconButton>
                        <IconButton href="#contact" onClick={(event) => {
                            scrollToAnchor(event, "contact");
                            updateNavText("Contact");
                        }}>Contact</IconButton>
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Header;

