import { useEffect, useState } from 'react'
import axios from "axios"
import TablaClientes from './TablaClientes';
import "../../assets/css/Clientes.css"

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
			<h1>Revisión Ocular</h1>
			<TablaClientes clientes={clientes}/>
		</div>
	)
}

export default Clientes