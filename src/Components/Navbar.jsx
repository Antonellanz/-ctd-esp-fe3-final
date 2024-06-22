import React from 'react'
import { Link} from 'react-router-dom'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
 /* const titles= [`contacto`, `descripcion`, `doctores`]
  const titlesMapped= titles.map((titulo)=>{
    return <h4>{titulo}</h4>
  })*/

  return (
  <nav>
         <Link to="/">
        <h4>Home</h4>
      </Link>
      <Link to="/Contact">
        <h4>Contacto</h4>
      </Link>
      <Link to="/Detail">
        <h4>Doctores</h4>
      </Link>
      <Link to="/Favs">
        <h4>Destacados</h4>
      </Link>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button>Change theme</button>
    </nav>
  )
}

export default Navbar