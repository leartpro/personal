import React from 'react';
import {Avatar, Box, Link, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';

const SourceList = () => {
    return (
        <Box>
            <Typography>Sources</Typography>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <List>
                    <ListItem>
                        <ListItemAvatar><Avatar><GitHubIcon/></Avatar></ListItemAvatar>
                        <ListItemText><Link>Github</Link></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar><Avatar><EmailIcon/></Avatar></ListItemAvatar>
                        <ListItemText><Link>Mail</Link></ListItemText>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default SourceList;