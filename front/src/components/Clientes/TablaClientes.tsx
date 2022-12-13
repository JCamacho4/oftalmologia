import {propsTabla } from "./Clientes";

function TablaClientes({clientes,clienteSeleccionado, setClienteSeleccionado}:propsTabla) {

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
