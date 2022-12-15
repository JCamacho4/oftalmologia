import {propsTabla } from "./Clientes";

function TablaClientes({clientes,clienteSeleccionado, setClienteSeleccionado}:propsTabla) {

  return (
    <>
    <div className="tableContainer">
      <div>
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
            {clientes.map((c, key) => {
              if (c === clienteSeleccionado) {
                return (
                  <tr key={key} onClick={() => {setClienteSeleccionado({ NIF: "", NOMBRE: "", APELLIDOS: "", EDAD: 0 })}} style={{ backgroundColor: "#9bded3" }}>
                    <td>{c.NIF}</td>
                    <td>{c.NOMBRE}</td>
                    <td>{c.APELLIDOS}</td>
                    <td>{c.EDAD}</td>
                  </tr>
                );
              }

              return (
                <tr key={key} onClick={() => {setClienteSeleccionado(c)}}>
                  <td>{c.NIF}</td>
                  <td>{c.NOMBRE}</td>
                  <td>{c.APELLIDOS}</td>
                  <td>{c.EDAD}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      </div>
    </>
  );
}

export default TablaClientes;
