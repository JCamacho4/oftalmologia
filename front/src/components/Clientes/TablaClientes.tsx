import React from 'react'
import { Client, ListaClientes } from './Clientes'

function TablaClientes({clientes} : ListaClientes) {
	return (
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
                <td>{c.NIF}</td>
                <td>{c.NOMBRE}</td>
                <td>{c.APELLIDOS}</td>
                <td>{c.EDAD}</td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
	)
}

export default TablaClientes