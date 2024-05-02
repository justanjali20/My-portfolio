
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactMe() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_5g5pskk', 'template_559641j', form.current, {
        publicKey: 'lFt9XGLzPt0iuXnou', 
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>Contact Me</h2>
      </div>
      <form ref={form} onSubmit={sendEmail} className="contact--form--container">
      <div className="container">
      <label htmlFor="first-name" className="contact--label">
      <span className="text-md">Name</span>

        <input 
        type="text" 
        className="contact--input text-md"
        id="first-name"
        placeholder="Enter Name" 
        required name="from_name" />
        </label>
       
        <label htmlFor="email" className="contact--label">
         <span className="text-md">Email</span>
        <input 
        id="email"
        type="email" 
        placeholder="Enter Email" 
        className="contact--input text-md"
        required name="from_email" />
        </label>
         
        <label htmlFor="message" className="contact--label">
        <span className="text-md">Message</span>
        <textarea 
        id="message"
        name="message" 
        className="contact--input text-md"
        rows="5" 
        placeholder="Your Message" />
        </label>
        </div>
        <div>
        <button   className="btn btn-primary contact--form--btn" type="submit" value="Send">
          Submit
        </button>
        </div>
      </form>
    </section>
  );
}

