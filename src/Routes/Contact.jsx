import React, { useContext } from 'react';
import Form from '../Components/Form';
import { ContextGlobal } from '../Components/utils/global.context';
import '../Styles/Contact.css';

const Contact = () => {
  const { theme } = useContext(ContextGlobal);

  return (
    <div className={`contact-container ${theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form />
    </div>
  );
};

export default Contact;
