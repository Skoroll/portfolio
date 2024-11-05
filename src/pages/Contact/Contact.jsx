import React from "react";
import ContactForm from "../../components/ContactForm";
import "../../styles/main.scss";

function Contact() {
  return (
    <div className="contact">
      <div className="contact__title">
        <h2>Contact</h2>

        <p> Vous voulez me contacter ? Vous avez une question ? </p>

        <p>
          <strong>
            <i className="fa-solid fa-phone"></i> 06.45.77.15.83
          </strong>
          ,
        </p>

        <p>
          <i className="fa-solid fa-paper-plane"></i> via{" "}
          <strong>"yg.gicquel@gmail.com" </strong>
        </p>

        <p>
          <i className="fa-solid fa-envelope"></i> en replisant le formulaire{" "}
          <span>ci-dessous</span> :
        </p>
      </div>

      <ContactForm />
    </div>
  );
}

export default Contact;
