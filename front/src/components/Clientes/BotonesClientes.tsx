import axios from "axios";
import { useEffect, useRef } from "react";
import { Client, propsBotones } from "./Clientes";
import swal from 'sweetalert';
import ojo from "../../assets/images/ojo2.png";

export function BotonesClientes({
  clientes,
  setClientes,
  clienteSeleccionado,
  setClienteSeleccionado,
}: propsBotones) {

	useEffect(() => {
		if(nif.current) nif.current.value = clienteSeleccionado.NIF;
		if(nombre.current) nombre.current.value = clienteSeleccionado.NOMBRE;
		if(apellidos.current) apellidos.current.value = clienteSeleccionado.APELLIDOS;
		if(edad.current) edad.current.value = clienteSeleccionado.EDAD.toString();
	}, [clienteSeleccionado]);

	const nif = useRef<HTMLInputElement>(null);
	const nombre = useRef<HTMLInputElement>(null);
	const apellidos = useRef<HTMLInputElement>(null);
	const edad = useRef<HTMLSelectElement>(null);

	const sort = (a, b) => {
		if (a.NIF < b.NIF) {
			return -1;
		}
		if (a.NIF > b.NIF) {
			return 1;
		}
		return 0;
	}

  const ages: number[] = [];
  for (let i = 0; i < 120; i++) {
    ages.push(i);
  }

  const abrirRevisiones = (client:Client) => {
    if(client.NIF.length > 0 ){
      window.location.href = client.NIF;
    } else {
      swal({
        icon: "error",
        title: "No se puede realizar la acción",
        text: "Seleccione un cliente para abrir sus revisiones."
      })
    }
  };

  const insertCliente = (cliente: Client) => {
    if (cliente.NIF.length > 0 && cliente.NOMBRE.length > 0 && cliente.APELLIDOS.length > 0) {
      if(clientes.find((c) => c.NIF === cliente.NIF) !== undefined){
        swal({
          icon: "error",
          title: "No se pudo realizar la inserción",
          text: "Ya existe un cliente con el mismo NIF"
        })
        return;
      }
      axios.post("http://localhost:3001/insertCliente", {
        NIF: cliente.NIF,
        NOMBRE: cliente.NOMBRE,
        APELLIDOS: cliente.APELLIDOS,
        EDAD: cliente.EDAD,
      });
      setClientes(clientes.concat(cliente).sort((a,b) => sort(a,b)));
      setClienteSeleccionado({ NIF: "", NOMBRE: "", APELLIDOS: "", EDAD: 0 });
    } else {
      swal({
        icon: "info",
        title: "No hay suficientes datos",
        text: "Introduzca todos los datos para insertar un nuevo cliente"
      })
    }
  };

  const deleteCliente = (cliente:Client) => {
    if(cliente.NIF.length > 0){
      axios.post("http://localhost:3001/deleteCliente", {
        NIF: cliente.NIF,
      });
      setClientes(clientes.filter((c) => c.NIF !== cliente.NIF));
      setClienteSeleccionado({ NIF: "", NOMBRE: "", APELLIDOS: "", EDAD: 0 });

    } else {
      swal({
        icon: "info",
        title: "Ningún cliente seleccionado",
        text: "Seleccione un cliente para poder eliminarlo"
      })
    }
  };

  const modificarCliente = (cliente:Client, oldClient:Client) => {
    if (oldClient.NIF.length < 1) {
      swal({
        icon: "info",
        title: "Ningún cliente seleccionado",
        text: "Seleccione previamente un cliente sobre el que modificar sus datos"
      })
      return;
    }
    if (clientes.find((c) => c.NIF === cliente.NIF && c !== oldClient) !== undefined) {
      swal({
        icon: "error",
        title: "No se pudo realizar la modificación",
        text: "Existe un cliente con el mismo NIF que se quiso modificar"
      })
      return;
    }
    if(cliente.NIF.length > 0 && cliente.NOMBRE.length > 0 && cliente.APELLIDOS.length > 0){
      axios.post("http://localhost:3001/updateCliente", {
        NIF: cliente.NIF,
        NOMBRE: cliente.NOMBRE,
        APELLIDOS: cliente.APELLIDOS,
        EDAD: cliente.EDAD,
				ANTIGUONIF: oldClient.NIF
      });
      setClientes(
        clientes.map((c) => {
          if (c.NIF === cliente.NIF) {
            return {
              NIF: cliente.NIF,
              NOMBRE: cliente.NOMBRE,
              APELLIDOS: cliente.APELLIDOS,
              EDAD: cliente.EDAD,
            };
          }
          return c;
        })
      );
      /*swal({
        icon: "success",
        title: "Modificación realizada con éxito"
      })*/
			setClientes(clientes.filter(c => c.NIF !== oldClient.NIF).concat(cliente).sort((a,b) => sort(a,b)));
      setClienteSeleccionado({ NIF: "", NOMBRE: "", APELLIDOS: "", EDAD: 0 });
    } else {
        swal({
          icon: "info",
          title: "No hay suficientes datos",
          text: "Introduzca todos los datos para llevar a cabo la modificación del cliente"
        })
    }
  };

  return (
    <>
      <div className="containerLabels">
        <form style={{position: "absolute",left: "20px"}}>
        <label>NIF</label>
          <input
            type="text"
						ref={nif}
            
          ></input>

          <br />

          <label>Nombre</label>
          <input
            type="text"
						ref={nombre}
          ></input>

          <br />

          <label>Apellidos</label>
          <input
            type="text"
						ref={apellidos}
          ></input>

          <br />

          <label>Edad</label>
          <select
						ref={edad}
          >
            {ages.map((age, i) => {
              if (age === clienteSeleccionado.EDAD) {
                return (
                  <option selected defaultValue={age} key={i}>
                    {age}
                  </option>
                );
              } else {
                return (
                  <option defaultValue={age} key={i}>
                    {age}
                  </option>
                );
              }
            })}
          </select>
        </form>
      </div>

      <div className="containerMostrarRevisiones">
          <button
          className="buttonRevisiones"
          onClick={() => abrirRevisiones(clienteSeleccionado)}
          ><img src={ojo} className="iconoBoton" alt=""/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mostrar Revisiones</button>
      </div>
      <div className="containerBotones">
          <button 
          className="buttonClientes"
          onClick={() => {
						let c : Client = {
							NIF: '',
							NOMBRE: '',
							APELLIDOS: '',
							EDAD: 0
						}
						if(nif.current) c.NIF = nif.current.value;
						if(nombre.current) c.NOMBRE = nombre.current.value;
						if(apellidos.current) c.APELLIDOS = apellidos.current.value;
						if(edad.current) c.EDAD = Number(edad.current.value);
						insertCliente(c);
					}}
          >Insertar Cliente</button>
          <button 
          className="buttonClientes"
          onClick={() => {deleteCliente(clienteSeleccionado)}}
          >Eliminar Cliente</button>
          <button
          className="buttonClientes"
          onClick={() => {
						let c : Client = {
							NIF: '',
							NOMBRE: '',
							APELLIDOS: '',
							EDAD: 0
						}
						if(nif.current) c.NIF = nif.current.value;
						if(nombre.current) c.NOMBRE = nombre.current.value;
						if(apellidos.current) c.APELLIDOS = apellidos.current.value;
						if(edad.current) c.EDAD = Number(edad.current.value);
						modificarCliente(c, clienteSeleccionado);
					}}
          >Modificar Cliente</button>
					<button
					className="buttonClientes"
					onClick={() => {
						setClienteSeleccionado({ NIF: "", NOMBRE: "", APELLIDOS: "", EDAD: 0 });
					}}
					>Limpiar</button>

      </div>
    </>
  );
}

export default BotonesClientes;
