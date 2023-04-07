import React from 'react';
import {Box, List, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Home from '@mui/icons-material/Home';
import {Navigation} from "react-router-dom";

//TODO: content can change on switch to project side
const ContentList = ({contentList}: { contentList: [string, string, object][]}) => {
    return (
        <Box>
            <ListItemText primary="Contents"/>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>

            <List>
                <ListItemButton>
                    <ListItemIcon sx={{color: 'inherit'}}>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary={'Home'}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon sx={{color: 'inherit'}}>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary={'About'}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon sx={{color: 'inherit'}}>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary={'My Journey'}/>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon sx={{color: 'inherit'}}>
                        <Home/>
                    </ListItemIcon>
                    <ListItemText primary={'Blog'}/>
                </ListItemButton>
            </List>
            </Box>
        </Box>
    );
}

export default ContentList;
