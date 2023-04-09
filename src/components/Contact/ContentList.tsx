import React from 'react';
import {Box, List, ListItemButton, ListItemText} from "@mui/material";
import {Navigation} from "../../interfaces/Navigation";
import DynamicListIcon from "./DynamicListIcon";
import scrollToAnchor from "../../functions/Scroll";

//TODO: content can change on switch to project side
const ContentList = ({navigations}: { navigations: Navigation[] }) => {

    return (
        <Box>
            <ListItemText primary="Contents"/>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <List>
                    {navigations.map((navigation: Navigation) => (
                        <ListItemButton href={navigation.href} onClick={
                            (event) => {
                                scrollToAnchor(event, navigation.anchorID);
                            }
                        }>
                            <DynamicListIcon name={navigation.icon}/>
                            <ListItemText primary={navigation.navText}/>
                        </ListItemButton>
                    ))}
                </List>
            </Box>
        </Box>
    )
        ;
}

export default ContentList;
