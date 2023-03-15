import React, { useRef } from 'react';
import { Label, TextInput, Button } from 'flowbite-react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_w4lkaep', 'template_rolstpw', form.current, '9QL23Cx5EoufZH-Ff')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };

    const messageSent = () => {
        Swal.fire({
            title: "Message Sent!",
            icon: "success",
            text: "Thank you for messaging me. I will get back to you as soon as I can."
        })
    }

    

    return (
        <div id='contact' className='flex flex-col items-center'>
            <span className='mt-10 text-3xl text-center'>Message Me</span>
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4 w-3/4">
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="name"
                        value="Name"
                    />
                    </div>
                    <TextInput
                    id="name"
                    type="text"
                    sizing="sm"
                    name="user_name"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="email"
                        value="Email"
                    />
                    </div>
                    <TextInput
                    id="email"
                    type="text"
                    sizing="sm"
                    name="user_email"
                    />
                </div>
                <div>
                    <div className="mb-2 block">
                    <Label
                        htmlFor="message"
                        value="Message"
                    />
                    </div>
                    <TextInput
                    id="message"
                    type="text"
                    sizing="lg"
                    name="message"
                    />
                </div>
                <Button type="submit" value="Send" onClick={messageSent}>Send Message</Button>
            </form>
        </div>
    );
};