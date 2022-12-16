import { useEffect, useState } from 'react'
import axios from "axios"
import BotonesRevisiones from './BotonesRevisiones'
import TablaRevisiones from './TablaRevisiones'
import { useParams } from "react-router-dom";
import "../../assets/css/Revisiones.css"
import { Client } from '../Clientes/Clientes';

export interface Revision{
	ID: string;
	CONSULTA: Date;
	OD_ESFERA: number;
	OD_CILINDRO: number;
	OD_ADICION:number;
	OD_AGUDEZA:number;
	OI_ESFERA:number;
	OI_CILINDRO:number;
	OI_ADICION:number;
	OI_AGUDEZA:number;
	cLIENTNIF:string;
}

export interface propsTabla{
	revisiones: Revision[];
	revisionSeleccionada: Revision;
	setRevisionSeleccionada: Function
	cliente_nif
}

export interface propsBotones{
	revisiones: Revision[];
	setRevisiones: Function;
	revisionSeleccionada: Revision;
	setRevisionSeleccionada: Function;
	client_nif
}

function Revisiones() {
	let params = useParams();
	let client_nif = params.cliente;

	const [cliente, setCliente] = useState<Client>();
	const [revisiones, setRevisiones] = useState<Revision[]>([])
	const [revisionSeleccionada, setRevisionSeleccionada] = useState<Revision>({
		ID: "",
		CONSULTA: new Date(),
		OD_ESFERA: 0,
		OD_CILINDRO: 0,
		OD_ADICION: 0,
		OD_AGUDEZA: 0,
		OI_ESFERA: 0,
		OI_CILINDRO: 0,
		OI_ADICION: 0,
		OI_AGUDEZA: 0,
		cLIENTNIF:""
	  });

	  useEffect(() => {
			axios.post("http://localhost:3001/lRevisiones", {
				NIF: client_nif
			}).then((revisiones) => {
		  	setRevisiones(revisiones.data);
			});

			axios.post("http://localhost:3001/clienteNIF", {
				nif: client_nif
			}).then((c) => setCliente(c.data));
	  }, [revisionSeleccionada]);

	return (
		<div>
			{cliente === undefined ?
					<h1 className='parpadea'>Cargando revisiones del paciente con NIF {client_nif}</h1>
					:
					<h1>Revisiones de {cliente?.NIF + ";" + cliente?.NOMBRE + ";" + cliente?.APELLIDOS + ";" + cliente?.EDAD}</h1>}

			<TablaRevisiones revisiones={revisiones} revisionSeleccionada={revisionSeleccionada} setRevisionSeleccionada={setRevisionSeleccionada} cliente_nif={client_nif} />
			
			<BotonesRevisiones revisiones={revisiones} setRevisiones={setRevisiones} revisionSeleccionada={revisionSeleccionada} setRevisionSeleccionada={setRevisionSeleccionada} client_nif={client_nif}/>
		</div>
	)
}

export default Revisiones