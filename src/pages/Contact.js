import emailjs from 'emailjs-com'
import React from 'react'

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_l93l7i4', 'template_vfdxa0h', e.target, "user_7Y3eP1RxHBOR60eJF3Kyz").then(res=>{ console.log(res);
        }).catch(err=> console.log(err));
    }
    return (
        <div className="container contact__container">
            <div className="row contact__container-row">
                <div className="col contact__container-col">
                    <div className="container contact__container-form">
                        <h1 className="contact__container-form-header">Contact Form</h1>
                        <form className="row" onSubmit={sendEmail}>
                            <label>Name</label>
                            <input type="text" name="name" className="form-control" />

                            <label>Email</label>
                            <input type="email" name="user_email" className="form-control" />

                            <label>Message</label>
                            <textarea name="message" rows="4" className="form-control" />
                            <input type="submit" value="Send" className="form-control btn btn-primary mt-2" />
                        </form>
                    </div>
                </div>
                <div className="col contact__container-col">
                    <div className="contact__info">
                        <h3>Contact Info</h3>
                        <h5 className="contact_text">Phone: <a href="tel:2679024605">(267) 902-4605</a></h5>
                        <h5 className="contact_text">Email:  <a href = "mailto: paraguayandeveloper@gmail.com">paraguayandeveloper@gmail.com</a></h5>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact