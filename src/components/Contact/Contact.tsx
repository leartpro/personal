import axios from 'axios';
import React, {useState} from "react";
import {Box, FormControl, FormGroup, FormLabel, Grid, Input, InputLabel} from "@mui/material";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = { name, email, message };
        axios.post('/submit-form', data)
            .then(response => console.log(response))
            .catch(error => console.log(error));
        setName('');
        setEmail('');
        setMessage('');
    }

    //TODO: completely make use of rect components
    return (
        <section id="contact">
            <FormGroup>
                <FormLabel>Get in touch</FormLabel>
                <Box sx={{ width: '100%' }}>
                <Grid container spacing={4} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                    <Grid item xs={6} md={8}>
                        <FormControl>
                            <InputLabel>Name</InputLabel>
                            <Input></Input>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <FormControl>
                            <InputLabel>EMail</InputLabel>
                            <Input></Input>
                        </FormControl>
                    </Grid>
                    <Grid item xs={6} md={8}>
                        <FormControl>
                            <InputLabel>Content</InputLabel>
                            <Input></Input>
                        </FormControl>
                    </Grid>
                </Grid>
                </Box>
            </FormGroup>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            placeholder="Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Your Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
            <textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
            ></textarea>
                    </div>
                    <button type="submit">Send Message</button>
                </form>
                <div className="contact-links">
                    <a href="mailto:your-email@example.com">your-email@example.com</a>
                    <a href="https://github.com/your-username">GitHub</a>
                    <a href="https://discord.com/your-username">Discord</a>
                </div>
        </section>
    );
}

export default Contact;