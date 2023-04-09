import React, {useState} from "react";
import {AppBar, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {Navigation} from "../../interfaces/Navigation";
import {useNavigate} from 'react-router-dom';
import scrollToAnchor from "../../functions/Scroll";

//reserved anchorId: 'back' (only use for navigations between pages)
function Header({navigations}: { navigations: Navigation[]}) {
    const [current, setCurrent] = useState('Home');
    const navigator = useNavigate();
    return (
        <AppBar>
            <Grid container spacing={12}>
                <Grid item xs={6}>
                    <Typography style={{alignSelf: 'flex-start'}}><h2>{current}</h2></Typography>
                </Grid>
                <Grid item xs={6}>
                    <Toolbar style={{alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                        {navigations.map((navigation: Navigation) => (
                            <IconButton href={`${navigation.href}`} onClick={(event) => {
                                if(navigation.anchorID === "home") navigator(-1);
                                scrollToAnchor(event, navigation.anchorID);
                                setCurrent(navigation.navText)
                            }}>{navigation.navText}</IconButton>
                        ))}
                    </Toolbar>
                </Grid>
            </Grid>
        </AppBar>
    );
}

export default Header;