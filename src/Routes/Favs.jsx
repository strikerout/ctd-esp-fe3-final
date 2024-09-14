import React, { useState, useEffect, useContext } from 'react';
import Card from '../Components/Card';
import { ContextGlobal } from '../Components/utils/global.context';
import '../Styles/Favs.css';

const Favs = () => {
  const { theme } = useContext(ContextGlobal);
  const [favs, setFavs] = useState([]);

  useEffect(() => {
    const getFavs = () => {
      const favs = JSON.parse(localStorage.getItem('favs')) || [];
      setFavs(favs);
    };
    
    getFavs();
  }, []);

  const clearAllFavs = () => {
    localStorage.removeItem('favs');
    setFavs([]);
  };

  return (
    <>
      <h1>Dentists Favs</h1>
      
      <div className={`card-grid`}>
        {favs.length > 0 ? (
          favs.map((dentist) => (
            <Card 
              key={dentist.id} 
              id={dentist.id} 
              name={dentist.name} 
              username={dentist.username} 
              theme={theme}
            />
          ))
        ) : (
          <p>No favorites found.</p>
        )}
      </div>
      <div className="button-container">
        <button className="clear-btn" onClick={clearAllFavs}>
          Clean All Favs
        </button>
      </div>
    </>
  );
};

export default Favs;
