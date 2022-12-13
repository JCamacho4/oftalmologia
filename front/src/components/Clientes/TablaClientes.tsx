import React from "react";
import { Client, propsTabla } from "./Clientes";
import { useState } from "react";
import { cambiarVaribales } from "./BotonesClientes";

function TablaClientes({clientes,clienteSeleccionado, setClienteSeleccionado}:propsTabla) {


  const [NIF, setNIF] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Apellidos, setApellidos] = useState("");
  const [Edad, setEdad] = useState(0);

  const cambiarClientes = (nif: string, nombre: string, apellidos: string, edad:number) => {
    setNIF(nif);
    setNombre(nombre);
    setApellidos(apellidos);
    setEdad(edad);
  };

  return (
    <div>
      <div className="containerTabla">
        <table className="tablaClientes">
          <thead>
            <tr>
              <th>NIF</th>
              <th>NOMBRE</th>
              <th>APELLIDO</th>
              <th>EDAD</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c, key) => (
              <tr
                key={key}
                onClick={() => {
                  cambiarVaribales(c.NIF, c.NOMBRE, c.APELLIDOS, c.EDAD)
                  setClienteSeleccionado({...c})}}
								style={clienteSeleccionado.NIF === c.NIF ? {backgroundColor: "#9bded3"} : {}}
              >
                <td>{c.NIF}</td>
                <td>{c.NOMBRE}</td>
                <td>{c.APELLIDOS}</td>
                <td>{c.EDAD}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
    </div>
    </div>
  );
}

export default TablaClientes;
