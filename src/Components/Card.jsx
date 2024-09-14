import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Cards.css";
import { FaStar, FaRegStar } from 'react-icons/fa'; 

const Card = ({ name, username, id, theme }) => { 
  const [isFavorite, setIsFavorite] = useState(false);

  const getFavs = () => JSON.parse(localStorage.getItem("favs")) || [];

  const updateFavoriteStatus = () => {
    const favs = getFavs();
    setIsFavorite(favs.some((fav) => fav.id === id));
  };

  useEffect(() => {
    updateFavoriteStatus();
  }, []);

  const toggleFav = () => {
    const favs = getFavs();
    const isAlreadyFav = favs.some((fav) => fav.id === id);

    if (isAlreadyFav) {
      const updatedFavs = favs.filter((fav) => fav.id !== id);
      localStorage.setItem("favs", JSON.stringify(updatedFavs));
    } else {
      const newFav = { name, username, id };
      localStorage.setItem("favs", JSON.stringify([...favs, newFav]));
    }
    
    updateFavoriteStatus();
  };

  return (
    <div className={`card ${theme}`}>
      <img
        src="public/images/doctor.jpg"
        alt="Dentist"
        className="card-image"
      />
      <h3>{name}</h3>
      <Link to={`/dentist/${id}`} className={`toDetails ${theme}`}>
        <p>{username}</p>
      </Link>
      <button 
        onClick={toggleFav} 
        className={`favButton ${isFavorite ? 'filled' : 'empty'}`}
      >
        {isFavorite ? <FaStar /> : <FaRegStar />} 
      </button>
    </div>
  );
};

export default Card;