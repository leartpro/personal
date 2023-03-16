import axios from 'axios';
import React, {useState} from "react";
import {Button, FormControl, FormGroup, FormLabel, Grid, Input, InputLabel} from "@mui/material";
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
        axios.post(`http://${serverAddress}:${serverPort}/contact`, data)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        setName('');
        setEmail('');
        setMessage('');
    }

    return (
        <section id="contact">
            <h1>Contact</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup style={{marginLeft: '35%', marginRight: '35%', marginBottom: '8px'}}>
                    <FormLabel style={{marginBottom: '8px'}}>Get in touch</FormLabel>
                        <Grid container spacing={8} style={{marginBottom: '8px'}}>
                            <Grid item xs={6}>
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
                            <Grid item xs={6}>
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
                        </Grid>
                            <FormControl style={{marginBottom: '8px'}}>
                                <InputLabel>Message</InputLabel>
                                <Input
                                    required
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </FormControl>
                            <Button type="submit" style={{marginLeft: '35%', marginRight: '35%'}}>Send Message</Button>
                </FormGroup>
            </form>
        </section>
    );
}

export default Contact;