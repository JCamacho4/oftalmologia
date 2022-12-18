import { AppDataSource } from "./data-source"
import { tClient } from "./entity/tClient"
import { tEye } from "./entity/tEye"

// constantes necesarias
const express = require("express");
const app = express();
const cors = require('cors');

// despliegue del servidor
app.use(express.json());
app.use(cors());
app.listen(3001, () => {
	console.log("Server running on port 3001");
});

// repositorios
const clientRepository = AppDataSource.getRepository(tClient);
const revisionRepository = AppDataSource.getRepository(tEye);

/* 	========================================================
	Consultas de tablas
	  ========================================================*/

app.get("/lClientes", async (req, res) => {
	let r = await clientRepository.find();
	res.send(await clientRepository.find());
});

app.post("/lRevisiones", async (req, res) => {
	let NIF = req.body.NIF;
	let c = await clientRepository.findOneBy({NIF: NIF});
	let r = await revisionRepository.findBy({
		CLIENT: c
	})
	res.send(r);
});

app.post("/clienteNIF",async (req, res) => {
	let nif = req.body.nif;
	let c  = await clientRepository.findOneBy({NIF: nif});
	res.send(c);
});


/* 	========================================================
	Inserciones
	  ========================================================*/

app.post("/insertCliente", async (req, res) => {

	let client = new tClient();
	client.NIF = req.body.NIF;
	client.NOMBRE = req.body.NOMBRE;
	client.APELLIDOS = req.body.APELLIDOS;
	client.EDAD = Number(req.body.EDAD);
	await clientRepository.save(client).catch(error => res.send(error));	// si la inserción es correcta devuelvo el cliente.

});

app.post("/insertCita", async (req, res) => {
	let nif = req.body.NIF;
	let c = await clientRepository.findOneBy({NIF: nif});

	const revision = new tEye();
	revision.CLIENT = c;
	revision.CONSULTA = req.body.CONSULTA;
	revision.OD_ADICION = Number(req.body.OD_ADICION);
	revision.OD_AGUDEZA = Number(req.body.OD_AGUDEZA);
	revision.OD_CILINDRO = Number(req.body.OD_CILINDRO);
	revision.OD_ESFERA = Number(req.body.OD_ESFERA);
	revision.OI_ADICION = Number(req.body.OI_ADICION);
	revision.OI_AGUDEZA = Number(req.body.OI_AGUDEZA);
	revision.OI_CILINDRO = Number(req.body.OI_CILINDRO);
	revision.OI_ESFERA = Number(req.body.OI_ESFERA);
	await revisionRepository.save(revision).catch(error => res.send(error));

	res.send();
});

app.post("/deleteCliente", async (req, res) => {
	let NIF = req.body.NIF;
	let c = await clientRepository.findOneBy({NIF: NIF});

	let revisiones = await revisionRepository.findBy({CLIENT: c});
	await revisionRepository.remove(revisiones);

	await clientRepository.remove(c);
});

app.post("/deleteCita", async (req, res) => {
	let ID = req.body.ID;
	let r = await revisionRepository.findOneBy({ID: ID});

	await revisionRepository.remove(r);

	res.send();
});

app.post("/updateCliente", async(req, res) => {
	let oldnif = req.body.ANTIGUONIF;

	let client = new tClient();
	client.NIF = req.body.NIF;
	client.NOMBRE = req.body.NOMBRE;
	client.APELLIDOS = req.body.APELLIDOS;
	client.EDAD = Number(req.body.EDAD);

	await clientRepository.save(client).catch(error => res.send(error));

	if(oldnif !== client.NIF){
		let c = await clientRepository.findOneBy({NIF: oldnif});

		let revisiones = await revisionRepository.findBy({CLIENT: c});
		revisiones.forEach(r => r.CLIENT = client);
		await revisionRepository.save(revisiones);

		await clientRepository.remove(c);
	}
});

app.post("/updateCita", async(req, res) => {
	let nif = req.body.NIF;
	let c = await clientRepository.findOneBy({NIF: nif});

	const revision = new tEye();
	revision.ID = req.body.ID;
	revision.CLIENT = c;
	revision.CONSULTA = req.body.CONSULTA;
	revision.OD_ADICION = Number(req.body.OD_ADICION);
	revision.OD_AGUDEZA = Number(req.body.OD_AGUDEZA);
	revision.OD_CILINDRO = Number(req.body.OD_CILINDRO);
	revision.OD_ESFERA = Number(req.body.OD_ESFERA);
	revision.OI_ADICION = Number(req.body.OI_ADICION);
	revision.OI_AGUDEZA = Number(req.body.OI_AGUDEZA);
	revision.OI_CILINDRO = Number(req.body.OI_CILINDRO);
	revision.OI_ESFERA = Number(req.body.OI_ESFERA);

	await revisionRepository.save(revision).catch(error => res.send(error));

	res.send();
});

AppDataSource.initialize().then(async () => {
	
})