import { useEffect, useState } from 'react'
import axios from "axios"
import BotonesRevisiones from './BotonesRevisiones'
import TablaRevisiones from './TablaRevisiones'
import { useParams } from "react-router-dom";
import "../../assets/css/Revisiones.css"

export interface Revisiones{
	ID: string;
	CONSULTA: string;
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

export interface ListaRevisiones{
	revisiones: Revisiones[]
}

function Revisiones() {
	let params = useParams();
	let nif = params.nif;

	const [revisiones, setRevisiones] = useState<Revisiones[]>([])
	const [revisionSeleccionada, setRevisionSeleccionada] = useState<Revisiones>({
		ID: "",
		CONSULTA: "",
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

	//   useEffect(() => {
	// 	axios.get("http://localhost:3001/lRevisiones").then((revisiones) => {
	// 	  setRevisiones(revisiones.data);
	// 	});
	//   }, []);


	return (
		<div>
			<h1>Revisiones</h1>

			<TablaRevisiones revisiones={revisiones}/>
			
			<BotonesRevisiones />
		</div>
	)
}

export default Revisiones