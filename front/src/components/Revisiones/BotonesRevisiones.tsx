import axios from "axios";
import { useEffect, useRef } from "react";
import { propsBotones, Revision } from './Revisiones';
import swal from 'sweetalert';

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
		if (!Number.isNaN(revision.CONSULTA.getDate())) {
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
		} else {
			swal({
				icon: "info",
        		title: "No hay suficientes datos",
        		text: "Compruebe que ha insertado una fecha de consulta correcta"
			})
		}
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
			swal({
				icon: "info",
				title: "No se puede realizar la acción",
				text: "Seleccione una revisión para poder eliminarla"
			})
		  }
	};

	const modificarRevision = (revision: Revision, nif) => {
		if(revision.ID.toString().length > 0){
			if (Number.isNaN(revision.CONSULTA.getDate())) {
				swal({
					icon: "info",
        			title: "No hay suficientes datos",
        			text: "Compruebe que ha insertado una fecha de consulta correcta"
				})
				return;
			}
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
			swal({
				icon: "info",
				title: "No se puede realizar la acción",
				text: "Seleccione una revisión para poder modificarla"
			})
		  }
	};

	return (
		<>
		<div className="containerLabelsRevisiones">
		  <form style={{position: "absolute",left: "20px"}}>
		  <label>OD_ESFERA&nbsp;&nbsp;&nbsp;&nbsp;</label>
			<input
			  type="text"
				ref={odesfera}
				style={{width:"100px"}}
			></input>
  
			<br />
  
			<label>OD_CILINDRO</label>
			<input
			  type="text"
				ref={odcilindro}
				style={{width:"100px"}}
			></input>
  
			<br />
  
			<label>OD_ADICION&nbsp;&nbsp;</label>
			<input
			  type="text"
				ref={odadicion}
				style={{width:"100px"}}
			></input>
  
			<br />
  
			<label>OD_AGUDEZA&nbsp;</label>
			<input
			  type="text"
				ref={odagudeza}
				style={{width:"100px"}}
			></input>
			</form>
			<form style={{position: "absolute",left: "300px"}}>
			<label>OI_ESFERA&nbsp;&nbsp;&nbsp;&nbsp;</label>
			<input
			  type="text"
				ref={oiesfera}
				style={{width:"100px"}}
			></input>
  
			<br />
  
			<label>OI_CILINDRO</label>
			<input
			  type="text"
				ref={oicilindro}
				style={{width:"100px"}}
			></input>
  
			<br />
  
			<label>OI_ADICION&nbsp;&nbsp;</label>
			<input
			  type="text"
				ref={oiadicion}
				style={{width:"100px"}}
			></input>
  
			<br />
  
			<label>OI_AGUDEZA&nbsp;</label>
			<input
			  type="text"
				ref={oiagudeza}
				style={{width:"100px"}}
			></input>

			<br />
			</form>
			<form style={{position: "absolute",left: "580px", top: "10px"}}>
			<label>CONSULTA&nbsp;&nbsp;&nbsp;&nbsp;</label>
			<input 
				type="date"
				ref={consulta}
				style={{width:"100px"}}
			></input>
		  </form>
		</div>
		<div className="containerBotonesRevisiones">
			<button 
			className="buttonRev"
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
			>Añadir Revision</button>
			<button 
			className="buttonRev"
			onClick={() => deleteRevision(revisionSeleccionada)}
			>Eliminar Revision</button>
			<button
			className="buttonRev"
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
			className="buttonRev"
			onClick={() => {
				setRevisionSeleccionada({ID: "",CONSULTA: Date.now(),OD_ESFERA: 0,OD_CILINDRO: 0,OD_ADICION: 0,OD_AGUDEZA: 0,OI_ESFERA: 0,
						OI_CILINDRO: 0,OI_ADICION: 0,OI_AGUDEZA: 0,cLIENTNIF: ""});
			}}
			>Limpiar</button>
			<button
			className="buttonRev"
			onClick={() => {
				window.location.href = "/";
			}}
			>Salir</button>
		</div>
	  </>
	)
}

export default BotonesRevisiones