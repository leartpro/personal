import React, {useState} from 'react';
import {Button, FormControl, FormGroup, FormLabel, Grid, Input, InputLabel} from "@mui/material";
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
        axios.post(`http://${serverAddress}:${serverPort}/contact`, data)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        setName('');
        setEmail('');
        setMessage('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <FormGroup>
                <Grid container justifyContent={"center"} alignItems={"center"}>
                    <Grid item>
                        <FormLabel>Get in touch</FormLabel>
                    </Grid>
                    <Grid item container>
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
                    <Grid item container>
                        <Grid item>
                            <FormControl>
                                <InputLabel>Message</InputLabel>
                                <Input
                                    required
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" type="submit"
                                    style={{marginLeft: '25%', marginRight: '25%'}}>Send Message</Button>
                        </Grid>
                    </Grid>
                </Grid>
            </FormGroup>
        </form>
    );
}

export default SubmitForm;