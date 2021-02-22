import React, { useState } from "react";

const AddProyectComponent = (props) => {
  let tecnologias = [
    "Java",
    "JavaScript",
    "Angular",
    "Ionic",
    "React",
    "ReactNative",
    "PHP",
    "Node",
    "Python",
  ];

  const [equipo, setEquipo] = useState([]);
  const [integrante, setIntegrante] = useState("");
  const [formulario, setFormulario] = useState({
    nombre: "",
    presupuesto: 0,
    tecnologia: "",
    responsable: "",
    trabajadores: [],
  });

  const handleInput = (e) => {
    console.log(e);
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h2>Formulario para agregar proyecto</h2>
      <form className="form mt3">
        <div class="mb-3">
          <label class="form-label">Nombre del proyecto</label>
          <input
            type="text"
            class="form-control"
            name="nombre"
            value={formulario.nombre}
            onChange={handleInput}
          ></input>
        </div>
        <div class="mb-3">
          <label class="form-label">Presupuesto</label>
          <input
            type="number"
            class="form-control"
            name="presupuesto"
            value={formulario.presupuesto}
            onChange={handleInput}
          ></input>
        </div>

        <div class="mb-3">
          <label class="form-label">Tecnología</label>
          <select class="form-control" onChange={handleInput} name="tecnologia">
            {tecnologias.map((tecnologia) => (
              <option>{tecnologia}</option>
            ))}
          </select>
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Responsable
          </label>
          <input
            value={formulario.responsable}
            type="text"
            class="form-control"
            name="responsable"
            onChange={handleInput}
            value={formulario.responsable}
          ></input>
        </div>

        <div class="mb-3" style={{ display: "flex" }}>
          <label class="form-label">Equipo</label>
          <input
            type="text"
            onChange="form-control"
            onChange={(e) => {
              //console.log(e.target.value);
              setIntegrante(e.target.value);
            }}
            value={integrante}
          ></input>
          <button
            className="btn btn-success"
            onClick={(e) => {
              e.preventDefault();
              //console.log(integrante);
              setEquipo([...equipo, integrante]);
            }}
          >
            Add
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              equipo.length > 0
                ? setFormulario({ ...formulario, trabajadores: equipo })
                : alert("Antes de confirmar agrega algun trabajador");
            }}
          >
            Confirmar
          </button>
        </div>
        {equipo.length > 0 ? (
          <div class="alert alert-dark" role="alert">
            Actualmente el equipo asignado tiene {equipo.length} integrantes:
            <ul>
              {equipo.map((integrante) => {
                return <li>{integrante}</li>;
              })}
            </ul>
          </div>
        ) : (
          <div class="alert alert-dark" role="alert">
            El equipo no tiene personal asignado
          </div>
        )}
      </form>
      <button
        onClick={() => {
          console.log(formulario);

          props.addProyect((proyects) => {
            return [...proyects, formulario];
          });

          setIntegrante("");
          setEquipo([]);
          setFormulario({
            nombre: "",
            presupuesto: 0,
            tecnologia: "",
            responsable: "",
            trabajadores: [],
          });
        }}
        className="btn btn-primary"
      >
        Agregar proyecto
      </button>
    </>
  );
};

export default AddProyectComponent;
