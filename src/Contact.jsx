
import "./Contact.css";

import PhoneIcon from "./assets/images/icons8-phone-24.png";
import EmailIcon from "./assets/images/icons8-email-24.png";
import LocationIcon from "./assets/images/icons8-location-24.png";
import { useState } from "react";


function Contact() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

    const [isSent, setIsSent] = useState(false);

    const validate = () => {
        let isValid = true;
        let errors = {};

        if (name === '') {
            isValid = false;
            errors['name'] = 'Please enter your name.';
        } else if (name.length < 2) {
            isValid = false;
            errors['name'] = 'Please enter a valid name.';
        } else {
            errors['name'] = '';
        }

        if (email === '') {
            isValid = false;
            errors['email'] = 'Please enter your email address.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            isValid = false;
            errors['email'] = 'Please enter a valid email address.';
        } else {
            errors['email'] = '';
        }

        if (message === '') {
            isValid = false;
            errors['message'] = 'Please enter your message.';
        } else {
            errors['message'] = '';
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            setIsSent(true);
        }
    };

    return (
        <main id="main-content">
            <section className="contact contact__container" id="contact">
                <h2 className="contact__title">Get in Touch</h2>
                <div className="contact__content">
                    <div className="contact__info">
                        <div className="contact__info-item">
                            <img src={PhoneIcon} alt="A phone icon" />
                            <span>(779) 265-3742</span>
                        </div>
                        <div className="contact__info-item">
                            <img src={EmailIcon} alt="A email icon" />
                            <span>
                                <a href="mailto:zhu.zihan@northeastern.edu">zhu.zihan@northeastern.edu</a>
                            </span>
                        </div>
                        <div className="contact__info-item">
                            <img src={LocationIcon} alt="A location icon" />
                            <span>Seattle, WA</span>
                        </div>
                        {isSent && <p className='message'>Hi, <span>{name}</span>. I'll get back to you as soon as possible. Thanks for contacting me!</p>}
                    </div>


                    <form id="contact__form" onSubmit={handleSubmit}>
                        <h3 className="contact__form-title">Send a Message</h3>
                        <label htmlFor="name">Name: *</label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Required"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        {errors.name && <span className="error">{errors.name}</span>}
                        <label htmlFor="email">Email: *</label>
                        <input
                            id="email"
                            type="text"
                            placeholder="Required"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <span className="error">{errors.email}</span>}
                        <label htmlFor="message">Message: *</label>
                        <textarea
                            id="message"
                            rows="3"
                            placeholder="Required"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        {errors.message && <span className="error">{errors.message}</span>}
                        <div className="modal__buttons">
                            <button className="modal__submit" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </section>
        </main>
    );
}

export default Contact;
