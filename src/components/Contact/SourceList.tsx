import React from 'react';
import {Avatar, Box, Grid, Link, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import FolderIcon from '@mui/icons-material/Folder';


const SourceList = () => {
    return (
        <Box>
            <Typography>Sources</Typography>
            <List>
                <ListItem>
                    <ListItemAvatar><Avatar><FolderIcon/></Avatar></ListItemAvatar>
                    <ListItemText><Link>Github</Link></ListItemText>
                </ListItem>
                <ListItem>
                    <ListItemAvatar><Avatar><FolderIcon/></Avatar></ListItemAvatar>
                    <ListItemText><Link>Mail</Link></ListItemText>
                </ListItem>
            </List>
        </Box>
    );
}

export default SourceList;