import { Client, propsBotones } from "./Clientes";

function BotonesClientes(
  {clienteSeleccionado, setClienteSeleccionado}:propsBotones) {
  const ages: number[] = [];
  for (let i = 0; i < 120; i++) {
    ages.push(i);
  }


  const abrirRevisiones = (nif) => {
    if(nif.length > 0 ){
      window.location.href = nif;
    }else{
      console.log("Selecciona una revision cazurro");
    }
  }

  let nif, nombre, apellidos, edad;

  return (
    <div className="containerClientes">
      <div className="buttonContainer">
        <form className="formulario">
          <label>NIF</label>
          <input
            type="text"
            onChange={(event) => {
              clienteSeleccionado.NIF = event.target.value;
              setClienteSeleccionado(clienteSeleccionado)}
          }
            value={nif}
          ></input>

          <br />

          <label>Nombre</label>
          <input
            type="text"
            onChange={(event) => {
              clienteSeleccionado.NOMBRE = event.target.value;
              setClienteSeleccionado(clienteSeleccionado)}
          }
            value={clienteSeleccionado.NOMBRE}
          ></input>

          <br />

          <label>Apellidos</label>
          <input
            type="text"
            onChange={(event) => {
              clienteSeleccionado.APELLIDOS = event.target.value;
              setClienteSeleccionado(clienteSeleccionado)}
          }
            value={clienteSeleccionado.APELLIDOS}
          ></input>

          <br />

          <label>Edad</label>
          <select
            onChange={(event) => {
              clienteSeleccionado.EDAD = Number.parseInt(event.target.value);
              setClienteSeleccionado(clienteSeleccionado)}
          }
            value={clienteSeleccionado.EDAD}
          >
            {ages.map((age, i) => {
             if(age === clienteSeleccionado.EDAD){
				return (
					<option selected value={age} key={i}>
					 {age}
				   </option>
				);
			 } else{
				 return (
				   <option value={age} key={i}>
					 {age}
				   </option>
				 );

			 }
			 
            })}
          </select>
        </form>
          <button
          >Mostrar Revisiones</button>

      </div>
      <div></div>
    </div>
  );
}

export default BotonesClientes;
