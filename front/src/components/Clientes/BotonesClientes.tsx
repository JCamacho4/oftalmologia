import { Client, propsBotones } from "./Clientes";

let nif, nombre, apellidos, edad;

export const cambiarVaribales = (n, no, ap, ed) => {
  nif = n;
  nombre = no;
  apellidos = ap;
  edad = ed;
}

export function BotonesClientes(
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

  return (
    <div className="containerClientes">
      <div className="buttonContainer">
        <form className="formulario">
          <label>NIF</label>
          <input
            type="text"
            onChange={(event) => {
              nif = event.target.value;
            }}
            value={nif}
          ></input>

          <br />

          <label>Nombre</label>
          <input
            type="text"
            onChange={(event) => {
              nombre = event.target.value;
            }}
            value={nombre}
          ></input>

          <br />

          <label>Apellidos</label>
          <input
            type="text"
            onChange={(event) => {
              apellidos = event.target.value;
            }}
            value={apellidos}
          ></input>

          <br />

          <label>Edad</label>
          <select
            onChange={(event) => {
              edad = event.target.value;
            }}
            value={edad}
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
