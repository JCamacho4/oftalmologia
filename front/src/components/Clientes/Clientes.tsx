import { useEffect, useState } from 'react'
import axios from "axios"
import TablaClientes from './TablaClientes';
import BotonesClientes from './BotonesClientes';

export interface Client{
	NIF: string;
	NOMBRE: string;
	APELLIDOS: string;
	EDAD: number;
}

export interface ListaClientes{
	clientes: Client[]
}

function Clientes() {

	const [clientes, setClientes] = useState<Client[]>([])
	
	useEffect(() => {
    axios.get("http://localhost:3001/lClientes").then((clientes) => {
      setClientes(clientes.data);
    });
  }, []);

	return (
		<div>
			<TablaClientes clientes={clientes}/>
		
			<BotonesClientes />
		</div>
	)
}

export default Clientes