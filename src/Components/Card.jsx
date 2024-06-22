import React from "react";
import { docContext } from "./utils/global.context";
import { Link } from "react-router-dom";

const Card = ({ data ,}) => {
  const { dispatch} = docContext();
  return (
    <div className="grid">
      <Link to={"/dentista/"+ data.id}>
      <h3>{data.name}</h3>

      </Link>
    </div>
  );

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
  }

  return (
    <div className="card">


        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
