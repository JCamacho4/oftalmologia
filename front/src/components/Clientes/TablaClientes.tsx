import React from 'react'
import { Client, ListaClientes } from './Clientes'
import { useState} from "react";
import BotonesClientes from './BotonesClientes';

function TablaClientes({clientes} : ListaClientes) {

  const [NIF, setNIF] = useState("");
	const [Nombre, setNombre] = useState("");
	const [Apellidos, setApellidos] = useState("");

  const cambiarClientes = (nif: string, nombre: string, apellidos: string) => {
		setNIF(nif);
		setNombre(nombre);
		setApellidos(apellidos);
	}

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
              <tr key={key}>
                <td
                  onClick={
                    () => cambiarClientes(c.NIF, c.NOMBRE, c.APELLIDOS)
                  }
                >{c.NIF}</td>
                <td
                  onClick={
                    () => cambiarClientes(c.NIF, c.NOMBRE, c.APELLIDOS)
                  }>{c.NOMBRE}</td>
                <td
                  onClick={
                    () => cambiarClientes(c.NIF, c.NOMBRE, c.APELLIDOS)
                  }
                >{c.APELLIDOS}</td>
                <td
                  onClick={
                    () => cambiarClientes(c.NIF, c.NOMBRE, c.APELLIDOS)
                  }
                >{c.EDAD}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
                  
    <BotonesClientes nif={NIF} nombre={Nombre} apellidos={Apellidos}
    setNIF = {setNIF}
    setNombre = {setNombre}
    setApellidos = {setApellidos}
    />
    </div>
	)
}

export default TablaClientes