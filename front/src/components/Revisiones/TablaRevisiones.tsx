import React from 'react'
import { propsTabla } from './Revisiones'

function TablaRevisiones({revisiones,revisionSeleccionada, setRevisionSeleccionada, cliente_nif}:propsTabla) {
	const convertDate = (d:Date) => {
		let x = d.toString().split('-');
		return x[1] + "/" + x[2] + "/" + x[0];
	}
	return (
		<div>
		<div className="containerTabla">
		  <table className="tablaRevisiones">
			<thead>
			  <tr>
				<th>ID</th>
				<th>NIF</th>
				<th>CONSULTA</th>
				<th>OD_ESFERA</th>
				<th>OD_CILINDRO</th>
				<th>OD_ADICION</th>
				<th>OD_AGUDEZA</th>
				<th>OI_ESFERA</th>
				<th>OI_CILINDRO</th>
				<th>OI_ADICION</th>
				<th>OI_AGUDEZA</th>
			  </tr>
			</thead>
			<tbody>
			  {revisiones.map((r, key) => (
				<tr
				  key={key}
				  onClick={() => {
					setRevisionSeleccionada({...r})}}
					style={revisionSeleccionada.ID === r.ID ? {backgroundColor: "#9bded3"} : {}}
				>
				  <td>{r.ID}</td>
				  <td>{cliente_nif}</td>
				  <td>{convertDate(r.CONSULTA)}</td>
				  <td>{r.OD_ESFERA}</td>
				  <td>{r.OD_CILINDRO}</td>
				  <td>{r.OD_ADICION}</td>
				  <td>{r.OD_AGUDEZA}</td>
				  <td>{r.OI_ESFERA}</td>
				  <td>{r.OI_CILINDRO}</td>
				  <td>{r.OI_ADICION}</td>
				  <td>{r.OI_AGUDEZA}</td>
				</tr>
			  ))}
			</tbody>
		  </table>
		</div>
	  </div>
	)
}

export default TablaRevisiones