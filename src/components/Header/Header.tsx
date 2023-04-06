import React, {useEffect, useState} from "react";
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {Navigation} from "../../types/Navigation";

function scrollToAnchor(event: React.MouseEvent, anchorId: string) {
    event.preventDefault();
    const element = document.getElementById(anchorId);
    if (element) {
        element.scrollIntoView({behavior: "smooth", block: "start"});
    }
}

function Header({navData}: { navData: string }) {
    const [navigations, setNavigations] = useState<Navigation[]>([]);
    const [navText, setNavText] = useState('');

    async function fetchNavigations() {
        const response = await fetch(navData);
        return await response.json();
    }

    useEffect(() => {
        fetchNavigations().then(data => {
            setNavText(data.navTextInitialState);
            setNavigations(data.navigations);
        }).catch(error => {
            console.error("Error fetching projects:", error);
        });
    }, []);

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
                        {navigations.map((navigation: Navigation) => (
                            <IconButton href={`${navigation.href}`} onClick={(event) => {
                                scrollToAnchor(event, navigation.anchorID);
                                updateNavText(navigation.navText);
                            }}>{navigation.navText}</IconButton>
                        ))}
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Header;