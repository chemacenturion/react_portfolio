import emailjs from 'emailjs-com'
import React from 'react'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_l93l7i4', 'template_vfdxa0h', e.target, "user_7Y3eP1RxHBOR60eJF3Kyz").then(res=>{ console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className="container border">
            <h1>Contact Form</h1>
            <form 
            className="row"
            onSubmit={sendEmail}
            >
                <label>Name</label>
                <input type="text" name="name" className="form-control" />

                <label>Email</label>
                <input type="email" name="user_email" className="form-control" />

                <label>Message</label>
                <textarea name="message" rows="4" className="form-control" />
                <input type="submit" value="Send" className="form-control btn btn-primary" />
            </form>
        </div> 
    )
}

export default Contact