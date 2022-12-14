import { useEffect, useState } from 'react'
import axios from "axios"
import BotonesRevisiones from './BotonesRevisiones'
import TablaRevisiones from './TablaRevisiones'
import { useParams } from "react-router-dom";
import "../../assets/css/Revisiones.css"

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

	const [revisiones, setRevisiones] = useState<Revision[]>([])
	const [revisionSeleccionada, setRevisionSeleccionada] = useState<Revision>({
		ID: "",
		CONSULTA: new Date(),
		OD_ESFERA: -1,
		OD_CILINDRO: -1,
		OD_ADICION: -1,
		OD_AGUDEZA: -1,
		OI_ESFERA: -1,
		OI_CILINDRO: -1,
		OI_ADICION: -1,
		OI_AGUDEZA: -1,
		cLIENTNIF:""
	  });

	  useEffect(() => {
		axios.post("http://localhost:3001/lRevisiones", {
			NIF: client_nif
		}).then((revisiones) => {
		  setRevisiones(revisiones.data);
			console.log(revisiones.data);
		});
	  }, []);

	return (
		<div>
			<h1>Revisiones de DNI {client_nif}</h1>

			<TablaRevisiones revisiones={revisiones} revisionSeleccionada={revisionSeleccionada} setRevisionSeleccionada={setRevisionSeleccionada} />
			
			<BotonesRevisiones revisiones={revisiones} setRevisiones={setRevisiones} revisionSeleccionada={revisionSeleccionada} setRevisionSeleccionada={setRevisionSeleccionada} client_nif={client_nif}/>
		</div>
	)
}

export default Revisiones