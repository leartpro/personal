import axios from 'axios';
import React, {useState} from "react";
import {Box, Button, FormControl, FormGroup, FormLabel, Grid, Input, InputLabel} from "@mui/material";
import serverConfig from './serverConfig.json';

const serverAddress = serverConfig.serverAddress;
const serverPort = serverConfig.serverPort;


const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {name, email, message};
        axios.post(`http://${serverAddress}:${serverPort}/submit-form`, data)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        setName('');
        setEmail('');
        setMessage('');
    }

    //TODO: completely make use of rect components
    return (
        <section id="contact" style={{width: "100%"}}>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <FormLabel>Get in touch</FormLabel>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={2} columnSpacing={{xs: 1, sm: 2, md: 4}}>
                            <Grid item xs={4} md={8}>
                                <FormControl>
                                    <InputLabel>Name</InputLabel>
                                    <Input
                                        required
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={4} md={8}>
                                <FormControl>
                                    <InputLabel>EMail</InputLabel>
                                    <Input
                                        required
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormControl>
                            </Grid>
                            <Grid item xs={8} md={8}>
                                <FormControl>
                                    <InputLabel>Content</InputLabel>
                                    <Input
                                        required
                                        id="content"
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </FormControl>
                            </Grid>
                            <Button type="submit">Send Message</Button>
                        </Grid>
                    </Box>
                </FormGroup>
            </form>
        </section>
    );
}

export default Contact;