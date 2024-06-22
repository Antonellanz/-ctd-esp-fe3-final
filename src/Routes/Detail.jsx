import React from 'react'
import {useNavigate, useParams,useEffect } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const getDetail = async () => {
    //Deberas completar este fetch con el parametro correspondiente
    const res = await fetch(`https://api.sampleapis.com/beers/ale/${id}`);
    const data = await res.json();
    setDetail(data);
  };

  useEffect(() => {
    getDetail();
  }, []);
 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1>Detail Dentist id </h1>
      <img src={detail.image} alt="detail" />
        <p>{detail.price}</p>
        <p>Rating: {detail.rating?.average}</p>
        <p>Reviews: {detail.rating?.reviews} </p>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
    </>
  )
}

export default Detail