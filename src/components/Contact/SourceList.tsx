import React from 'react';
import {
    Alert,
    Avatar,
    Box, Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Snackbar,
    Typography
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import CodeIcon from '@mui/icons-material/Code';

const SourceList = () => {
    const [copied, setCopied] = React.useState(false);

    const handleClick = () => {
        navigator.clipboard.writeText('lennartprotte.tech@gmail.com');
        setCopied(true);
    };

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setCopied(false);
    }

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
                        <ListItemText><Link onClick={handleClick}>lennartprotte.tech@gmail.com</Link></ListItemText>
                        <Snackbar open={copied}
                                  autoHideDuration={6000}
                                  onClose={handleClose}>
                            <Alert onClose={handleClose} severity="success" sx={{width: '100%'}}>
                                copied to clipboard
                            </Alert>
                        </Snackbar>
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar><Avatar><CodeIcon/></Avatar></ListItemAvatar>
                        <ListItemText><Link href="https://github.com/leartpro/personal">This
                            Website</Link></ListItemText>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default SourceList;