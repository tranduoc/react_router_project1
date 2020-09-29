import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="container">
        <div className="row h-100 ">
          <div className="col my-auto ">
            <div className="header-content mx-auto  news-item-title ">
              <h1 className="mb-5 text-center pb-3">Contact Us</h1>
            </div>
          </div>
        </div>
        <div className="text-center mt-4">
          <h3 className="section-subheading text-muted">
            Lorem ipsum dolor sit amet consectetur.
          </h3>
        </div>
        <form id="contactForm" name="sentMessage" noValidate="novalidate">
          <div className="row align-items-stretch mb-5">
            <div className="col-md-6">
              <div className="form-group">
                <input
                  className="form-control"
                  id="name"
                  type="text"
                  placeholder="Your Name *"
                  required="required"
                  data-validation-required-message="Please enter your name."
                  aria-invalid="false"
                />
                <p className="help-block text-danger" />
              </div>
              <div className="form-group">
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  placeholder="Your Email *"
                  required="required"
                  data-validation-required-message="Please enter your email address."
                  aria-invalid="false"
                />
                <p className="help-block text-danger" />
              </div>
              <div className="form-group mb-md-0">
                <input
                  className="form-control"
                  id="phone"
                  type="tel"
                  placeholder="Your Phone *"
                  required="required"
                  data-validation-required-message="Please enter your phone number."
                />
                <p className="help-block text-danger" />
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-group form-group-textarea mb-md-0">
                <textarea
                  className="form-control"
                  id="message"
                  placeholder="Your Message *"
                  required="required"
                  data-validation-required-message="Please enter a message."
                  defaultValue={""}
                />
                <p className="help-block text-danger" />
              </div>
            </div>
          </div>
          <div className="text-center">
            <div id="success" />
            <button
              className="btn btn-primary btn-xl text-uppercase"
              id="sendMessageButton"
              type="submit"
            >
              Send Message
            </button>
          </div>
        </form>
      </section>
    );
  }
}

export default Contact;
