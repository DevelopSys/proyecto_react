import React from "react";
import CardProyectComponent from "./CardProyectComponent";

export const DetailProyectoComponent = (props) => {
  return (
    <>
      <h2>Detalle de los proyectos</h2>
      {props.proyectos.map((proyecto) => {
        return <CardProyectComponent proyecto={proyecto} />;
      })}
    </>
  );
};
