import React from "react";
import React, { useState } from "react";
import Card from "./Card";
import ErrorMessage from "./ErrorMessage";


 const Form = () => {
  const [paciente, setPaciente] = useState({
    nombre: "",
    email: "",
  });
  const [turno, setTurno] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (paciente.nombre.trim().length > 5 && regex.test(paciente.email)) {
      setTurno(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Nombre del paciente</label>
        <input
          type="text"
          value={paciente.nombre}
          onBlur={(event) =>
            setPaciente({ ...paciente, nombre: event.target.value })
          }
        />
        <label>Email</label>
        <input
          type="text"
          value={paciente.email}
          onBlur={(event) =>
            setPaciente({ ...paciente, email: event.target.value })
          }
        />
        <button>Finalizar</button>
      </form>
      {turno && <Card paciente={paciente} />}
      {error && <ErrorMessage />}
    </>
  );
  //Aqui deberan implementar el form completo con sus validaciones


};

export default Form;
