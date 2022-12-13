import { useEffect, useState } from 'react'
import axios from "axios"
import TablaClientes from './TablaClientes';
import "../../assets/css/Clientes.css"
import BotonesClientes from './BotonesClientes';

export interface Client{
	NIF: string;
	NOMBRE: string;
	APELLIDOS: string;
	EDAD: number;
}

export interface propsTabla{
	clientes: Client[];
	clienteSeleccionado: Client;
	setClienteSeleccionado: Function
}

export interface propsBotones{
	clienteSeleccionado: Client;
	setClienteSeleccionado: Function
}

function Clientes() {

	const [clientes, setClientes] = useState<Client[]>([])
	const [clienteSeleccionado, setClienteSeleccionado] = useState<Client>({
		NIF: '',
		NOMBRE: '',
		APELLIDOS: '',
		EDAD: 0
	  });
	
	useEffect(() => {
    axios.get("http://localhost:3001/lClientes").then((clientes) => {
      setClientes(clientes.data);
    });
  }, []);

	return (
		<div>
			<h1>Revisión Ocular</h1>

			{/* @ts-ignore */	/*Esto es literalmente un bug de React */ }
			<TablaClientes clientes={clientes} clienteSeleccionado={clienteSeleccionado} setClienteSeleccionado={setClienteSeleccionado} />

			<BotonesClientes clienteSeleccionado={clienteSeleccionado} setClienteSeleccionado={setClienteSeleccionado} />
		</div>
	)
}

export default Clientes