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

    //TODO: this form can not use display: flex
    return (
        <section id="contact">
            <h1 style={{marginLeft: '50%', marginRight: '50%'}}>Contact</h1>
            <form onSubmit={handleSubmit}>
                <FormGroup style={{marginLeft: '40%', marginRight: '40%'}}>
                    <FormLabel>Get in touch</FormLabel>
                                <FormControl>
                                    <InputLabel>Name</InputLabel>
                                    <Input
                                        required
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </FormControl>
                                <FormControl>
                                    <InputLabel>EMail</InputLabel>
                                    <Input
                                        required
                                        id="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </FormControl>
                            <FormControl>
                                <InputLabel>Message</InputLabel>
                                <Input
                                    required
                                    id="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </FormControl>
                            <Button type="submit">Send Message</Button>
                </FormGroup>
            </form>
        </section>
    );
}

export default Contact;