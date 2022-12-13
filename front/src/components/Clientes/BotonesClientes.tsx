import axios from "axios";
import { Client, propsBotones } from "./Clientes";

export function BotonesClientes({clienteSeleccionado, setClienteSeleccionado}:propsBotones) {

  const ages: number[] = [];
  for (let i = 0; i < 120; i++) {
    ages.push(i);
  }

  const abrirRevisiones = (nif) => {
    if(nif.length > 0 ){
      window.location.href = nif;
    }else{
      alert("Selecciona un cliente cazurro");
    }
  }

  const insertCliente = (cliente:Client) => {
    if(cliente){
      axios.post("http://localhost/3001/insertCliente", {
        NIF: cliente.NIF,
        NOMBRE: cliente.NOMBRE,
        APELLIDOS: cliente.APELLIDOS,
        EDAD: cliente.EDAD
      })
      alert("Cliente insertado con éxito");
      window.location.reload();

    }else{
      alert("Selecciona un cliente pedazo de marica");
    }
  }

  const deleteCliente = (cliente) => {
    if(cliente){
      axios.post("http://localhost/3001/deleteCliente", {
        NIF: cliente.NIF,
      })
      alert("Cliente eliminado con éxito");
      window.location.reload();
    }else{
      alert("Selecciona un cliente pedazo de gay");
    }
  }

  const modificarCliente = (cliente) => {
    if(cliente){
      axios.post("http://localhost/3001/updateCliente", {
        NIF: cliente.NIF,
        NOMBRE: cliente.NOMBRE,
        APELLIDOS: cliente.APELLIDOS,
        EDAD: cliente.EDAD
      })
      alert("Cliente modificado con éxito");
      window.location.reload();
    }else{
      alert("Selecciona un cliente pedazo de estúpido");
    }
  }

  return (
    <div className="containerClientes">
      <div className="buttonContainer">
        <form className="formulario">
          <label>NIF</label>
          <input
            type="text"
            onChange={(event) => {
              const nuevoSeleccionado: Client = {
                ...clienteSeleccionado,
                NIF: event.target.value,
              };
              setClienteSeleccionado(nuevoSeleccionado);
            }}
            value={clienteSeleccionado.NIF}
          ></input>

          <br />

          <label>Nombre</label>
          <input
            type="text"
            onChange={(event) => {
              const nuevoSeleccionado: Client = {
                ...clienteSeleccionado,
                NOMBRE: event.target.value,
              };
              setClienteSeleccionado(nuevoSeleccionado);
            }}
            value={clienteSeleccionado.NOMBRE}
          ></input>

          <br />

          <label>Apellidos</label>
          <input
            type="text"
            onChange={(event) => {
              const nuevoSeleccionado: Client = {
                ...clienteSeleccionado,
                APELLIDOS: event.target.value,
              };
              setClienteSeleccionado(nuevoSeleccionado);
            }}
            value={clienteSeleccionado.APELLIDOS}
          ></input>

          <br />

          <label>Edad</label>
          <select
            onChange={(event) => {
              const nuevoSeleccionado: Client = {
                ...clienteSeleccionado,
                EDAD: Number.parseInt(event.target.value),
              };
              setClienteSeleccionado(nuevoSeleccionado);
            }}
            value={clienteSeleccionado.EDAD}
          >
            {ages.map((age, i) => {
             if(age === clienteSeleccionado.EDAD){
				return (
					<option selected defaultValue={age} key={i}>
					 {age}
				   </option>
				);
			 } else{
				 return (
				   <option defaultValue={age} key={i}>
					 {age}
				   </option>
				 );

			 }
			 
            })}
          </select>
        </form>
          <button
          onClick={() => abrirRevisiones(clienteSeleccionado.NIF)}
          >Mostrar Revisiones</button>

          <button
            onClick={() => insertCliente(clienteSeleccionado)}
          >Insertar Cliente</button>
          <button
          onClick={() => deleteCliente(clienteSeleccionado)}
          >Eliminar Cliente</button>
          <button
          onClick={() => modificarCliente(clienteSeleccionado)}
          >Modificar Cliente</button>

      </div>
      <div></div>
    </div>
  );
}

export default BotonesClientes;
