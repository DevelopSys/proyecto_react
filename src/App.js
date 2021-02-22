import { useState } from "react";
import AddProyectComponent from "./components/AddProyectComponent";
import { DetailProyectoComponent } from "./components/DetailProyectoComponent";
import { ListProyectComponents } from "./components/ListProyectComponents";
import logo from "./logo.svg";

function App() {
  const [proyectos, setProyectos] = useState([
    {
      nombre: "React telefonoca",
      presupuesto: 1000,
      responsable: "Borja",
      trabajadores: ["Borja", "Luis", "Pedro"],
      tecnologia: "React",
    },
  ]);

  return (
    <div className="App container mt-4">
      <h1>Aplicación de gestión de proyectos</h1>
      <h3>App web destinada a la gestión de los proyectos de una empresa</h3>

      {proyectos.length == 1 && (
        <div className="alert alert-warning" role="alert">
          Todavía no tienes ningún proyecto asignado
        </div>
      )}
      <div class="alert alert-primary" role="alert">
        Actualmente cuentas con {proyectos.length} proyectos
      </div>
      <div className="row">
        <div className="col-8">
          <AddProyectComponent addProyect={setProyectos} />
          <DetailProyectoComponent proyectos={proyectos} />
        </div>
        <div className="col-4">
          <ListProyectComponents proyectos={proyectos} />
        </div>
      </div>
    </div>
  );
}

export default App;
