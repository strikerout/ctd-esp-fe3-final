import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ContextGlobal } from './utils/global.context';
import { FaMoon, FaSun } from 'react-icons/fa';
import styles from '../Styles/Navbar.module.css';

const Navbar = () => {
  const { theme, dispatch } = useContext(ContextGlobal);

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };

  return (
    <nav className={`${styles.navbar} ${styles[theme]}`}>
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          <h1>
            <span className={styles.red}>D</span>H Odonto
          </h1>
        </Link>
      </div>
      <div className={styles.right}>
        <Link to="/home">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/favs">Favs</Link>
        <button onClick={toggleTheme} className={styles.themeButton}>
          {theme === 'light' ? <FaMoon /> : <FaSun />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
