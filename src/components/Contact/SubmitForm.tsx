import React, {useState} from 'react';
import {Box, Button, FormControl, FormGroup, Grid, Input, InputLabel, Typography} from "@mui/material";
import axios from "axios";
import serverConfig from './serverConfig.json';

const SubmitForm = () => {
    const serverAddress = serverConfig.serverAddress;
    const serverPort = serverConfig.serverPort;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = {name, email, message};
        axios.post(`https://${serverAddress}:${serverPort}/contact`, data)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        setName('');
        setEmail('');
        setMessage('');
    }
    return (
        <Box>
            <Typography>Get in touch</Typography>
            <form onSubmit={handleSubmit}>
                <FormGroup>
                    <Grid container spacing={8}>
                        <Grid item>
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
                        <Grid item>
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
                    <FormControl>
                        <InputLabel>Message</InputLabel>
                        <Input
                            required
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </FormControl>
                    <Button variant="contained" type="submit">Send Message</Button>
                </FormGroup>
            </form>
        </Box>
    );
}

export default SubmitForm;