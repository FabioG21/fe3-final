import React from "react";
import Card from "../Components/Card";
import { useDentStates } from "../Components/utils/global.context";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state, dispatch } = useDentStates();
  const deleteFavs = () => {
    dispatch({type:"REMOVE_ALL_FAV"})
  }
  return (
    <>
      <div className={state.theme === 'dark' ? 'dark' : ''}>
        <h1>Dentists Favs</h1>
        <div className="card-grid">
          <>
            {/* este componente debe consumir los destacados del localStorage */
              state.favs.map((dent) => (<Card key={dent.id} dent={dent} />))}
            {/* Deberan renderizar una Card por cada uno de ellos */}
          </>
        <button onClick={deleteFavs} className="favButton">Remove all favs</button>
        </div>
      </div>
    </>
  );
};

export default Favs;
