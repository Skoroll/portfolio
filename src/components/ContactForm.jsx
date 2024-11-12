import React, { useState } from "react";
import emailjs from "emailjs-com";


const ContactForm = () => {
  /* État pour stocker les données du formulaire */
  const [formData, setFormData] = useState({
    name: "",    
    email: "",   
    message: "", 
  });

  // Gestion du changement des champs du formulaire
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Mise à jour des données du formulaire en fonction de l'entrée de l'utilisateur
    setFormData({ ...formData, [name]: value });
  };

  // Fonction pour envoyer le formulaire par EmailJS
  const sendEmail = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page lors de l'envoi du formulaire

    // Envoi des données du formulaire via EmailJS
    emailjs
      .sendForm(
        "service_p2rof4k",         // ID du service EmailJS
        "template_a9mf34d",        // ID du template EmailJS
        e.target,                  // Formulaire soumis
        "q_08ua-YqLlEfROJB"        // Clé publique utilisateur EmailJS
      )
      .then(
        (result) => {
          console.log(result.text); // Affiche un message de succès
        },
        (error) => {
          console.log(error.text); // Affiche un message d'erreur si l'envoi échoue
        }
      );

    // Réinitialisation des champs du formulaire après l'envoi
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <form onSubmit={sendEmail}>
      <div className="form_input_div">
        {/* Champ pour le nom */}
        <input
          type="text"
          name="name"             // Correspond au modèle {{name}} dans EmailJS
          placeholder="Votre nom"
          value={formData.name}    // Valeur du champ contrôlée par l'état formData
          onChange={handleChange}  // Appel de handleChange à chaque modification
          required                 // Rend le champ obligatoire
        />
        {/* Champ pour l'email */}
        <input
          type="email"
          name="email"             // Correspond au modèle {{email}} dans EmailJS
          placeholder="Votre email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      {/* Champ pour le message */}
      <textarea
        name="message"             // Correspond au modèle {{message}} dans EmailJS
        placeholder="Votre message"
        value={formData.message}
        onChange={handleChange}
        required
      />
      {/* Bouton pour envoyer le formulaire */}
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
