import React, { useContext } from 'react';
import { ContextGlobal } from './utils/global.context';
import styles from '../Styles/Footer.module.css';

const Footer = () => {
  const { theme } = useContext(ContextGlobal);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={`${styles.footer} ${styles[theme]}`}>
      <div className={styles.topBar} onClick={scrollToTop}>
        <p>VOLVER PARA EL TOPE</p>
      </div>

      <div className={styles.footerContent}>
        <img src="/images/DH.png" alt="DH-logo" className={styles.logo} />
        
        <div className={styles.socialIcons}>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-facebook.png" alt="Facebook" className={styles.icon} />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-instagram.png" alt="Instagram" className={styles.icon} />
          </a>
          <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-whatsapp.png" alt="WhatsApp" className={styles.icon} />
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/ico-tiktok.png" alt="TikTok" className={styles.icon} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
