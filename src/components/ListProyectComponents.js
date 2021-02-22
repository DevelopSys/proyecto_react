import React from "react";

export const ListProyectComponents = (props) => {
  return (
    <>
      <h2>Listado de proyetos</h2>
      <ul>
        {props.proyectos.map((e) => {
          return <li>{e.nombre}</li>;
        })}
      </ul>
    </>
  );
};
