import React, { useState } from "react";
import '../Styles/Contact.css'; 

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    let errors = {};
    let valid = true;

    
    if (name.length < 6) {
      errors.name = "El nombre debe tener al menos 6 caracteres.";
      valid = false;
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      errors.email = "Debe ser un correo electrónico válido.";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log({ name, email });
      setSubmitted(true);
    } else {
      setSubmitted(false);
    }
  };

  return (
    <div className="form-container">
      <h2>Formulario de contacto</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre completo:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errors.name && <p className="message error">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email">Correo electrónico:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p className="message error">{errors.email}</p>}
        </div>

        <button type="submit">Enviar</button>
        
        {submitted && (
          <p className="message success">
            Gracias {name}, te contactaremos cuanto antes vía email.
          </p>
        )}
        {!submitted && Object.keys(errors).length > 0 && (
          <p className="message error">
            Por favor verifica la información nuevamente.
          </p>
        )}
      </form>
    </div>
  );
};

export default Form;
