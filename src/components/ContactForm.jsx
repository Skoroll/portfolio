import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p2rof4k",
        "template_a9mf34d",
        e.target,
        "q_08ua-YqLlEfROJB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="form_imput_div">
        <input
          type="text"
          name="name" // Correspond au modèle {{name}}
          placeholder="Votre nom"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email" // Correspond au modèle {{email}}
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <textarea
        name="message" // Correspond au modèle {{message}}
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
