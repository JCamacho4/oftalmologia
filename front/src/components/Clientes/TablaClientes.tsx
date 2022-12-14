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
                  <tr key={key} style={{ backgroundColor: "#9bded3" }}>
                    <td onClick={() => {setClienteSeleccionado({ NIF: "", NOMBRE: "", APELLIDOS: "", EDAD: 0 })}}>{c.NIF}</td>
                    <td onClick={() => {setClienteSeleccionado({ NIF: "", NOMBRE: "", APELLIDOS: "", EDAD: 0 })}}>{c.NOMBRE}</td>
                    <td onClick={() => {setClienteSeleccionado({ NIF: "", NOMBRE: "", APELLIDOS: "", EDAD: 0 })}}>{c.APELLIDOS}</td>
                    <td onClick={() => {setClienteSeleccionado({ NIF: "", NOMBRE: "", APELLIDOS: "", EDAD: 0 })}}>{c.EDAD}</td>
                  </tr>
                );
              }

              return (
                <tr key={key}>
                  <td onClick={() => {setClienteSeleccionado(c)}}>{c.NIF}</td>
                  <td onClick={() => {setClienteSeleccionado(c)}}>{c.NOMBRE}</td>
                  <td onClick={() => {setClienteSeleccionado(c)}}>{c.APELLIDOS}</td>
                  <td onClick={() => {setClienteSeleccionado(c)}}>{c.EDAD}</td>
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
