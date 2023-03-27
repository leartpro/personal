import React from 'react';
import {Box, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import Home from '@mui/icons-material/Home';


const ContentList = () => {
    return (
        <Box>
            <ListItemText primary="Contents"/>
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
                <ListItemText primary={'Home'}/>
            </ListItemButton>
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
                <ListItemText primary={'Home'}/>
            </ListItemButton>
        </Box>
    );
}

export default ContentList;
