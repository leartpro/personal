import React from 'react';
import {Avatar, Box, Grid, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';


const SourceList = () => {
    return (
        <Box>
            <Typography>Sources</Typography>
            <List>
                <ListItem>
                    <ListItemAvatar><Avatar><FolderIcon/></Avatar></ListItemAvatar>
                    <ListItemText primary="One-line item"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar><Avatar><FolderIcon/></Avatar></ListItemAvatar>
                    <ListItemText primary="Two-line item"/>
                </ListItem>
                <ListItem>
                    <ListItemAvatar><Avatar><FolderIcon/></Avatar></ListItemAvatar>
                    <ListItemText primary="Three-line item"/>
                </ListItem>
            </List>
        </Box>
    );
}

export default SourceList;