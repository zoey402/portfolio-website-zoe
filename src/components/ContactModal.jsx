import React, { useState, forwardRef } from 'react';
import './ContactModal.css';

const ContactModal = forwardRef(({ setIsSent, onNameChange }, ref) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [errors, setErrors] = useState({});

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
            onNameChange(name);
            ref.current.close();
            setName('');
            setEmail('');
            setMessage('');
            setErrors({});
        }
    };

    const closeModal = () => {
        setIsSent(false);
        setName('');
        setEmail('');
        setMessage('');
        setErrors({});
        ref.current.close();
    };

    return (

        <>
            <dialog ref={ref} className="modal">
                
                <div className="modal__container">
                    <div className="modal__content">
                        <p className="modal__text">Thank you for your interest in my work. Please fill out the form below and I'll get back to you as soon as possible.</p>
                        <form id="modal__form" onSubmit={handleSubmit}>
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
                                <button className="modal__cancel" onClick={closeModal}>Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog>

        </>
        
    );

});

export default ContactModal;


