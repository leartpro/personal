import axios from 'axios';
import React, {useState} from "react";

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

    return (
        <section id="contact">
            <div className="container">
                <h2 className="section-heading">Get in Touch</h2>
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
            </div>
        </section>
    );
}

export default Contact;