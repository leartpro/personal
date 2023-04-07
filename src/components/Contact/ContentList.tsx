import React from 'react';
import {Box, List, ListItemButton, ListItemText} from "@mui/material";
import {Navigation} from "../../interfaces/Navigation";
import DynamicListIcon from "./DynamicListIcon";
import scrollToAnchor from "../../functions/Scroll";
import {useNavigate} from "react-router-dom";

//TODO: content can change on switch to project side
const ContentList = ({navigations}: { navigations: Navigation[] }) => {
    const navigator = useNavigate();

    return (
        <Box>
            <ListItemText primary="Contents"/>
            <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
                <List>
                    {navigations.map((navigation: Navigation) => (
                        <ListItemButton href={navigation.href} onClick={
                            (event) => {
                                if (navigation.anchorID === "back") navigator(-1);
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
