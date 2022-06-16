import './Contact.css';
import { useContext } from 'react'
import { ThemeContext } from '../Context';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

function Contact({ Contact }) {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');

    const formRef = useRef();
    const handleClick = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_56011h6', 'template_0csp5cy', formRef.current, 'sEx0da4C17zgodqyI')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        setName(''); setEmail(''); setSubject(''); setMessage('');
    }

    return (
        <div data-aos='fade-up' ref={Contact} className={darkMode ? 'contact__dark' : 'contact'}>
            <h1 data-aos='fade-up' data-aos-delay='100'>Contact <span>Me</span></h1>
            <p data-aos='fade-up' data-aos-delay='200'>I am interested in working opportunity. However, if you have any request or questions or you need work for charity.</p>
            <h3 data-aos='fade-up' data-aos-delay='300'>Just drop me a line!</h3>
            <form data-aos='fade-up' data-aos-delay='400' ref={formRef} onSubmit={handleClick}>
                <div className="inputs">
                    <input value={name} onChange={(e) => setName(e.target.value)} className='input-group' type="text" placeholder='Name' required name='user_name' />
                    <input value={email} onChange={(e) => setEmail(e.target.value)} className='input-group' type="email" placeholder='Email' required name='user_email' />
                </div>
                <input value={subject} onChange={(e) => setSubject(e.target.value)} type="text" placeholder='Subject' name='user_subject' />
                <textarea value={message} onChange={(e) => setMessage(e.target.value)} required placeholder='Message' name="user_message" id="" cols="30" rows="10"></textarea>
                <button>Send Message</button>
            </form>
        </div>
    )
}

export default Contact