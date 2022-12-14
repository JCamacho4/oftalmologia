import axios from "axios";
import { propsBotones, Revision } from './Revisiones'

export function BotonesRevisiones({
	revisiones,
	setRevisiones,
	revisionSeleccionada,
	setRevisionSeleccionada,
	client_nif
}:propsBotones) {

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
			});
			setRevisiones(revisiones.concat(revision));
			setRevisionSeleccionada({ID: "",CONSULTA: "",OD_ESFERA: -1,OD_CILINDRO: -1,OD_ADICION: -1,OD_AGUDEZA: -1,OI_ESFERA: -1,
			OI_CILINDRO: -1,OI_ADICION: -1,OI_AGUDEZA: -1,cLIENTNIF:""});
	};

	const deleteRevision = (revision: Revision) => {
		if(revision.ID.toString().length > 0){
			axios.post("http://localhost:3001/deleteCita", {
			  ID: revision.ID,
			});
			setRevisiones(revisiones.filter((c) => c.ID !== revision.ID));
			setRevisionSeleccionada({ID: "",CONSULTA: "",OD_ESFERA: -1,OD_CILINDRO: -1,OD_ADICION: -1,OD_AGUDEZA: -1,OI_ESFERA: -1,
			OI_CILINDRO: -1,OI_ADICION: -1,OI_AGUDEZA: -1,cLIENTNIF:""});
	  
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
			});
			setRevisiones(
			  revisiones.map((c) => {
				if (c.ID === revision.ID) {
				  return {
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
				  };
				}
				return c;
			  })
			);
	  
			setRevisionSeleccionada({ID: "",CONSULTA: "",OD_ESFERA: -1,OD_CILINDRO: -1,OD_ADICION: -1,OD_AGUDEZA: -1,OI_ESFERA: -1,
			OI_CILINDRO: -1,OI_ADICION: -1,OI_AGUDEZA: -1,cLIENTNIF:""});
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
			  onChange={(event) => {
				const nuevoSeleccionado: Revision = {
				  ...revisionSeleccionada,
				  OD_ESFERA: Number.parseFloat(event.target.value),
				};
				setRevisionSeleccionada(nuevoSeleccionado);
			  }}
			  value={revisionSeleccionada.OD_ESFERA}
			></input>
  
			<br />
  
			<label>OD_CILINDRO</label>
			<input
			  type="text"
			  onChange={(event) => {
				const nuevoSeleccionado: Revision = {
				  ...revisionSeleccionada,
				  OD_CILINDRO: Number.parseFloat(event.target.value),
				};
				setRevisionSeleccionada(nuevoSeleccionado);
			  }}
			  value={revisionSeleccionada.OD_CILINDRO}
			></input>
  
			<br />
  
			<label>OD_ADICION</label>
			<input
			  type="text"
			  onChange={(event) => {
				const nuevoSeleccionado: Revision = {
				  ...revisionSeleccionada,
				  OD_ADICION: Number.parseFloat(event.target.value),
				};
				setRevisionSeleccionada(nuevoSeleccionado);
			  }}
			  value={revisionSeleccionada.OD_ADICION}
			></input>
  
			<br />
  
			<label>OD_AGUDEZA</label>
			<input
			  type="text"
			  onChange={(event) => {
				const nuevoSeleccionado: Revision = {
				  ...revisionSeleccionada,
				  OD_AGUDEZA: Number.parseFloat(event.target.value),
				};
				setRevisionSeleccionada(nuevoSeleccionado);
			  }}
			  value={revisionSeleccionada.OD_AGUDEZA}
			></input>

			<label>OI_ESFERA</label>
			<input
			  type="text"
			  onChange={(event) => {
				const nuevoSeleccionado: Revision = {
				  ...revisionSeleccionada,
				  OI_ESFERA: Number.parseFloat(event.target.value),
				};
				setRevisionSeleccionada(nuevoSeleccionado);
			  }}
			  value={revisionSeleccionada.OI_ESFERA}
			></input>
  
			<br />
  
			<label>OI_CILINDRO</label>
			<input
			  type="text"
			  onChange={(event) => {
				const nuevoSeleccionado: Revision = {
				  ...revisionSeleccionada,
				  OI_CILINDRO: Number.parseFloat(event.target.value),
				};
				setRevisionSeleccionada(nuevoSeleccionado);
			  }}
			  value={revisionSeleccionada.OI_CILINDRO}
			></input>
  
			<br />
  
			<label>OI_ADICION</label>
			<input
			  type="text"
			  onChange={(event) => {
				const nuevoSeleccionado: Revision = {
				  ...revisionSeleccionada,
				  OI_ADICION: Number.parseFloat(event.target.value),
				};
				setRevisionSeleccionada(nuevoSeleccionado);
			  }}
			  value={revisionSeleccionada.OI_ADICION}
			></input>
  
			<br />
  
			<label>OI_AGUDEZA</label>
			<input
			  type="text"
			  onChange={(event) => {
				const nuevoSeleccionado: Revision = {
				  ...revisionSeleccionada,
				  OI_AGUDEZA: Number.parseFloat(event.target.value),
				};
				setRevisionSeleccionada(nuevoSeleccionado);
			  }}
			  value={revisionSeleccionada.OI_AGUDEZA}
			></input>

		  </form>
		</div>
		<div className="containerBotones">
			<button 
			className="buttonClientes"
			onClick={() => insertRevision(revisionSeleccionada, client_nif)}
			>Insertar Revision</button>
			<button 
			className="buttonClientes"
			onClick={() => deleteRevision(revisionSeleccionada)}
			>Eliminar Revision</button>
			<button
			className="buttonClientes"
			onClick={() => modificarRevision(revisionSeleccionada, client_nif)}
			>Modificar Revision</button>
  
		</div>
	  </>
	)
}

export default BotonesRevisiones