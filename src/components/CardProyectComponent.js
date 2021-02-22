import React from "react";

const CardProyectComponent = ({ proyecto }) => {
  console.log(proyecto);
  return (
    <>
      <div className="card" style={{ width: "18rem;" }}>
        <img src="..." className="card-img-top" alt="..."></img>
        <div className="card-body">
          <h5 className="card-title">{proyecto.nombre}</h5>
          <p className="card-text"></p>
          <div>
            <ul>
              {proyecto.trabajadores.map((trabajador) => (
                <li>{trabajador}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardProyectComponent;
