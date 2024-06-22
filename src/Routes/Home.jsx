import React from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { state, dispatch } = useContext(GlobalContext);

  useEffect(() => {
    axios.get('https://api.example.com/dentists')
      .then(response => {
        dispatch({ type: 'SET_DENTISTS', payload: response.data });
      });
  }, [dispatch]);
  
  

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        <Card></Card>
        {/* Aqui deberias renderizar las cards */}
      </div>
    </main>
      /*<div>
      {state.dentists.map(dentist => (
        <div key={dentist.id}>
          <h3>{dentist.name}</h3>
          <p>{dentist.specialty}</p>
          <a href={`/dentista/${dentist.id}`}>Ver detalles</a>
        </div>
      ))}
    </div>*/
  )
}

export default Home