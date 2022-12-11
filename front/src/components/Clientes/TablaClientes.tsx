import React from "react";
import { Client, ListaClientes } from "./Clientes";
import { useState } from "react";
import BotonesClientes from "./BotonesClientes";

function TablaClientes({ clientes }: ListaClientes) {
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
                onClick={() => cambiarClientes(c.NIF, c.NOMBRE, c.APELLIDOS, c.EDAD)}
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
      <BotonesClientes
        nif={NIF}
        nombre={Nombre}
        apellidos={Apellidos}
        edad={Edad}
        setNIF={setNIF}
        setNombre={setNombre}
        setApellidos={setApellidos}
        setEdad={setEdad}
      />
    </div>
    </div>
  );
}

export default TablaClientes;
