import React from 'react';
import {Avatar, Box, Link, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';

const SourceList = () => {
    return (
        <Box>
            <Typography>Sources</Typography>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <List>
                    <ListItem>
                        <ListItemAvatar><Avatar><GitHubIcon/></Avatar></ListItemAvatar>
                        <ListItemText><Link href="https://github.com/leartpro">leartpro</Link></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar><Avatar><EmailIcon/></Avatar></ListItemAvatar>
                        {/*TODO: Copy to Clipboard with Popover*/}
                        <ListItemText><Link>lennartprotte.tech@gmail.com</Link></ListItemText>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar><Avatar><CodeIcon/></Avatar></ListItemAvatar>
                        <ListItemText><Link href="https://github.com/leartpro/personal">This Website</Link></ListItemText>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default SourceList;