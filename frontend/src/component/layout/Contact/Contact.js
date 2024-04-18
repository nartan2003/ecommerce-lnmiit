import React from "react";
import "./Contact.css";
import { Button } from "@material-ui/core";

const Contact = () => {
  return (
    <div>
      <section className="contact-us-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-8 offset-md-2">
            <h2 className="text-center mb-4">Contact Us</h2>
            <div className="row">
              <div className="col-md-6">
                <form className="contact-form">
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Full Name" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" placeholder="Email" required />
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div className="mb-3">
                    <input type="text" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" rows="5" placeholder="Message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary btn-block">Send Message</button>
                </form>
              </div>
              <div className="col-md-6">
                <div className="contact-info">
                  
                 
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
    
  );
};

export default Contact;
