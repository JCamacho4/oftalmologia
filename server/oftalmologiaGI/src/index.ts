import { AppDataSource } from "./data-source"
import { tClient } from "./entity/tClient"
import { tEye } from "./entity/tEye"

const express = require("express");
require("dotenv").config();
const app = express();
const cors = require('cors');
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
	res.send(r);
});

app.post("/lRevisiones", async (req, res) => {
	let clientNIF = req.body.CLIENT;
	let r = await revisionRepository.findBy({
		CLIENT: clientNIF,
	})
	res.send(r);
});


/* 	========================================================
	Inserciones
	  ========================================================*/

app.post("/insCliente", async (req, res) => {
	try {
		const client = new tClient();
		client.NIF = req.body.NIF;
		client.NOMBRE = req.body.NOMBRE;
		client.APELLIDOS = req.body.APELLIDOS;
		client.EDAD = Number(req.body.EDAD);
		await clientRepository.save(client)
		res.send(client);	// si la inserción es correcta devuelvo el cliente.
	} catch (err) {
		res.status(500).send({ status: 'error', message: err.message });
	}
});

app.post("/insCita", async (req, res) => {
	try {
		
	} catch (err) {
		res.status(500).send({ status: 'error', message: err.message });
	}
});






/*
AppDataSource.initialize().then(async () => {

	const clientRepository = AppDataSource.getRepository(tClient)
	const revisionRepository = AppDataSource.getRepository(tEye)


	const client2 = new tClient()
	client2.NIF = "87654321Z"
	client2.NOMBRE = "Pepe"
	client2.APELLIDOS = "Fascista Americano"
	client2.EDAD = 200
	await clientRepository.save(client2)

	const revision = new tEye()
	revision.CLIENT = client
	revision.CONSULTA = "Consulta del doctor pollagorda"
	revision.OD_ADICION = 1
	revision.OD_AGUDEZA = 1
	revision.OD_CILINDRO = 1
	revision.OD_ESFERA = 1
	revision.OI_ADICION = 1
	revision.OI_AGUDEZA = 1
	revision.OI_CILINDRO = 1
	revision.OI_ESFERA = 1
	await revisionRepository.save(revision)
	console.log("Revision ", revision, " almacenada en la base de datos")

	const clients2 = await clientRepository.find({
		relations: {
			REVISIONES: true
		}
	})
	console.log("Cargando todos los clientes de la base de datos con sus relaciones:\n", clients2)

}).catch(error => console.log(error))
*/
