import React from "react";
import {Divider, Grid,} from "@mui/material";
import ContentList from "./ContentList";
import SubmitForm from "./SubmitForm";
import SourceList from "./SourceList";
import {Navigation} from "../../interfaces/Navigation";

//TODO: take arguments and transmit to ContentList
const Contact = ({navigations}: { navigations: Navigation[]}) => {
    return (
        <section id="contact">
            <Divider variant="middle"/>
            <h1>Contact</h1>
            <Grid container>
                <Grid item width={'33%'}>
                    <ContentList navigations={navigations}/>
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