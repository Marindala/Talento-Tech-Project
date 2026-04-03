import React from "react";
function Asistente(props) {
  return (
    <div>
      <h2>{props.nombre}</h2>
      <p>
        {props.tarea} {props.emoji}
      </p>
    </div>
  );
}

export default Asistente;
 // Clave para poder usarlo en App.jsx u otros
//archivos