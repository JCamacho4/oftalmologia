import axios from "axios";
import { useEffect, useRef } from "react";
import { propsBotones, Revision } from './Revisiones'

export function BotonesRevisiones({
	revisiones,
	setRevisiones,
	revisionSeleccionada,
	setRevisionSeleccionada,
	client_nif
}:propsBotones) {

	const odesfera = useRef<HTMLInputElement>(null);
	const odcilindro = useRef<HTMLInputElement>(null);
	const odadicion = useRef<HTMLInputElement>(null);
	const odagudeza = useRef<HTMLInputElement>(null);
	const oiesfera = useRef<HTMLInputElement>(null);
	const oicilindro = useRef<HTMLInputElement>(null);
	const oiadicion = useRef<HTMLInputElement>(null);
	const oiagudeza = useRef<HTMLInputElement>(null);
	const consulta = useRef<HTMLInputElement>(null);

	useEffect(() => {
		if(odesfera.current) odesfera.current.value = revisionSeleccionada.OD_ESFERA.toString();
		if(odcilindro.current) odcilindro.current.value = revisionSeleccionada.OD_CILINDRO.toString();
		if(odadicion.current) odadicion.current.value = revisionSeleccionada.OD_ADICION.toString();
		if(odagudeza.current) odagudeza.current.value = revisionSeleccionada.OD_AGUDEZA.toString();
		if(oiesfera.current) oiesfera.current.value = revisionSeleccionada.OI_ESFERA.toString();
		if(oicilindro.current) oicilindro.current.value = revisionSeleccionada.OI_CILINDRO.toString();
		if(oiadicion.current) oiadicion.current.value = revisionSeleccionada.OI_ADICION.toString();
		if(oiagudeza.current) oiagudeza.current.value = revisionSeleccionada.OI_AGUDEZA.toString();
		if(consulta.current) consulta.current.value = revisionSeleccionada.CONSULTA.toString();
	}, [revisionSeleccionada]);

	const insertRevision = (revision: Revision, nif:string) => {
			axios.post("http://localhost:3001/insertCita", {
			  NIF: nif,
			  ID: revision.ID,
			  CONSULTA: revision.CONSULTA,
			  OD_ESFERA: revision.OD_ESFERA,
			  OD_CILINDRO: revision.OD_CILINDRO,
			  OD_ADICION: revision.OD_ADICION,
			  OD_AGUDEZA: revision.OD_AGUDEZA,
			  OI_ESFERA: revision.OI_ESFERA,
			  OI_CILINDRO: revision.OI_CILINDRO,
			  OI_ADICION: revision.OI_ADICION,
			  OI_AGUDEZA: revision.OI_AGUDEZA,
			}).then(() => {
				setRevisionSeleccionada({ID: "",CONSULTA: Date.now(),OD_ESFERA: 0,OD_CILINDRO: 0,OD_ADICION: 0,OD_AGUDEZA: 0,OI_ESFERA: 0,
						OI_CILINDRO: 0,OI_ADICION: 0,OI_AGUDEZA: 0,cLIENTNIF:""});
			});

			
	};

	const deleteRevision = (revision: Revision) => {
		if(revision.ID.toString().length > 0){
			axios.post("http://localhost:3001/deleteCita", {
			  ID: revision.ID,
			}).then(() => {
				setRevisionSeleccionada({ID: "",CONSULTA: new Date(),OD_ESFERA: 0,OD_CILINDRO: 0,OD_ADICION: 0,OD_AGUDEZA: 0,OI_ESFERA: 0,
					OI_CILINDRO: 0,OI_ADICION: 0,OI_AGUDEZA: 0,cLIENTNIF:""});
			});
		  } else {
			alert("Selecciona un cliente pedazo de gay");
		  }
	};

	const modificarRevision = (revision: Revision, nif) => {
		if(revision.ID.toString().length > 0){
			axios.post("http://localhost:3001/updateCita", {
				NIF: nif,
				ID: revision.ID,
				CONSULTA: revision.CONSULTA,
				OD_ESFERA: revision.OD_ESFERA,
				OD_CILINDRO: revision.OD_CILINDRO,
				OD_ADICION: revision.OD_ADICION,
				OD_AGUDEZA: revision.OD_AGUDEZA,
				OI_ESFERA: revision.OI_ESFERA,
				OI_CILINDRO: revision.OI_CILINDRO,
				OI_ADICION: revision.OI_ADICION,
				OI_AGUDEZA: revision.OI_AGUDEZA,
			}).then(() => {
				setRevisionSeleccionada({ID: "",CONSULTA: new Date(),OD_ESFERA: 0,OD_CILINDRO: 0,OD_ADICION: 0,OD_AGUDEZA: 0,OI_ESFERA: 0,
					OI_CILINDRO: 0,OI_ADICION: 0,OI_AGUDEZA: 0,cLIENTNIF:""});
			});
		  } else {
			alert("Selecciona un cliente pedazo de estúpido");
		  }
	};

	return (
		<>
		<div className="containerLabels">
		  <form>
		  <label>OD_ESFERA</label>
			<input
			  type="text"
				ref={odesfera}
			></input>
  
			<br />
  
			<label>OD_CILINDRO</label>
			<input
			  type="text"
				ref={odcilindro}
			></input>
  
			<br />
  
			<label>OD_ADICION</label>
			<input
			  type="text"
				ref={odadicion}
			></input>
  
			<br />
  
			<label>OD_AGUDEZA</label>
			<input
			  type="text"
				ref={odagudeza}
			></input>

			<label>OI_ESFERA</label>
			<input
			  type="text"
				ref={oiesfera}
			></input>
  
			<br />
  
			<label>OI_CILINDRO</label>
			<input
			  type="text"
				ref={oicilindro}
			></input>
  
			<br />
  
			<label>OI_ADICION</label>
			<input
			  type="text"
				ref={oiadicion}
			></input>
  
			<br />
  
			<label>OI_AGUDEZA</label>
			<input
			  type="text"
				ref={oiagudeza}
			></input>

			<br />

			<label>CONSULTA</label>
			<input 
				type="date"
				ref={consulta}
			></input>

		  </form>
		</div>
		<div className="containerBotones">
			<button 
			className="buttonClientes"
			onClick={() => {
				let r : Revision = {...revisionSeleccionada};
			  if(consulta.current) r.CONSULTA = new Date(consulta.current?.value);
			  r.OD_ESFERA = Number(odesfera.current?.value);
			  r.OD_CILINDRO = Number(odcilindro.current?.value);
			  r.OD_ADICION = Number(odadicion.current?.value);
			  r.OD_AGUDEZA = Number(odagudeza.current?.value);
			  r.OI_ESFERA = Number(oiesfera.current?.value);
			  r.OI_CILINDRO = Number(oicilindro.current?.value);
			  r.OI_ADICION = Number(oiadicion.current?.value);
			  r.OI_AGUDEZA = Number(oiagudeza.current?.value);
				insertRevision(r, client_nif)
			}}
			>Insertar Revision</button>
			<button 
			className="buttonClientes"
			onClick={() => deleteRevision(revisionSeleccionada)}
			>Eliminar Revision</button>
			<button
			className="buttonClientes"
			onClick={() => {
				let r : Revision = {...revisionSeleccionada};
			  if(consulta.current) r.CONSULTA = new Date(consulta.current?.value);
			  r.OD_ESFERA = Number(odesfera.current?.value);
			  r.OD_CILINDRO = Number(odcilindro.current?.value);
			  r.OD_ADICION = Number(odadicion.current?.value);
			  r.OD_AGUDEZA = Number(odagudeza.current?.value);
			  r.OI_ESFERA = Number(oiesfera.current?.value);
			  r.OI_CILINDRO = Number(oicilindro.current?.value);
			  r.OI_ADICION = Number(oiadicion.current?.value);
			  r.OI_AGUDEZA = Number(oiagudeza.current?.value);
				modificarRevision(r, client_nif);
			}}
			>Modificar Revision</button>
			<button
			className="buttonClientes"
			onClick={() => {
				setRevisionSeleccionada({ID: "",CONSULTA: Date.now(),OD_ESFERA: 0,OD_CILINDRO: 0,OD_ADICION: 0,OD_AGUDEZA: 0,OI_ESFERA: 0,
						OI_CILINDRO: 0,OI_ADICION: 0,OI_AGUDEZA: 0,cLIENTNIF:""});
			}}
			>Limpiar</button>
  
		</div>
	  </>
	)
}

export default BotonesRevisiones