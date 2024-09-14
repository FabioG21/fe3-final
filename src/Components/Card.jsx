import React from "react";
import { Link } from "react-router-dom";
import { useDentStates } from "./utils/global.context";


//const Card = ({ name, username, id }) => {
const Card = ({ dent }) => {
  const { state, dispatch } = useDentStates();
  const isFav = state.favs.find((fav) => fav.id == dent.id)
  const addFav = () => {
    // Aqui iria la logica para agregar la Card en el localStorage
    dispatch({ type: isFav ? "REMOVE_FAV" : "ADD_FAV", payload: dent });
    
  };

  return (
    <div className={state.theme === 'dark' ? 'card cardDark' : 'card'}>

          <img className="odontologo" src="/images/doctor.jpg" alt="Odontologo" />
          <h3>ID: {dent.id}</h3>
          <h3>USER: {dent.username}</h3>
          <Link to={'/dentist/' + dent.id}>
            <h3>NAME: {dent.name}</h3>
          </Link>

      <button onClick={addFav} className="favButton">{isFav ? 'Remove fav ✨' : 'Add fav ⭐'}</button>
    </div>
  );
};

export default Card;
