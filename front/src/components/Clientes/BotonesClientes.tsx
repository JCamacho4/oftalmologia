
import { useState } from "react";

function BotonesClientes(parametros) {

	return (
		<div className='buttonContainer'>
			<form className="formulario">
				<label>NIF</label>
				<input type="text" onChange={ () => parametros.setNIF()} value={parametros.nif}></input>

				<br/>

				<label>Nombre</label>
				<input type="text" onChange={ () => parametros.setNombre()} value={parametros.nombre}></input>

				<br/>

				<label>Apellidos</label>
				<input type="text" onChange={ () => parametros.setApellidos()} value={parametros.apellidos}></input>
			</form>
		</div>
	)
}

export default BotonesClientes