function BotonesClientes({
  nif,
  setNIF,
  nombre,
  setNombre,
  apellidos,
  setApellidos,
  edad,
  setEdad,
}) {
  const ages: number[] = [];
  for (let i = 0; i < 120; i++) {
    ages.push(i);
  }

  return (
    <div className="containerClientes">
      <div className="buttonContainer">
        <form className="formulario">
          <label>NIF</label>
          <input
            type="text"
            onChange={(event) => setNIF(event.target.value)}
            value={nif}
          ></input>

          <br />

          <label>Nombre</label>
          <input
            type="text"
            onChange={(event) => setNombre(event.target.value)}
            value={nombre}
          ></input>

          <br />

          <label>Apellidos</label>
          <input
            type="text"
            onChange={(event) => setApellidos(event.target.value)}
            value={apellidos}
          ></input>

          <br />

          <label>Edad</label>
          <select
            onChange={(event) => setEdad(event.target.value)}
            value={edad}
          >
            {ages.map((age, i) => {
             if(age === edad){
				return (
					<option selected value={age} key={i}>
					 {age}
				   </option>
				);
			 } else{
				 return (
				   <option value={age} key={i}>
					 {age}
				   </option>
				 );

			 }
			 
            })}
          </select>
        </form>
      </div>
      <div></div>
    </div>
  );
}

export default BotonesClientes;
