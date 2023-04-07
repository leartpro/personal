import React from "react";
import {Divider, Grid,} from "@mui/material";
import ContentList from "./ContentList";
import SubmitForm from "./SubmitForm";
import SourceList from "./SourceList";
import {Navigation} from "react-router-dom";

//TODO: take arguments and transmit to ContentList
const Contact = ({contentList}: { contentList: [Navigation, object][]}) => {
    return (
        <section id="contact">
            <Divider variant="middle"/>
            <h1>Contact</h1>
            <Grid container>
                <Grid item width={'33%'}>
                    <ContentList/>
                </Grid>
                <Grid item width={'33%'}>
                    <SubmitForm/>
                </Grid>
                <Grid item width={'33%'}>
                    <SourceList/>
                </Grid>
            </Grid>
        </section>
    );
}
export default Contact;