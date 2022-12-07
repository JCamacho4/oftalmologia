import { AppDataSource } from "./data-source"
import { tClient } from "./entity/tClient"
import { tEye } from "./entity/tEye"

AppDataSource.initialize().then(async () => {

		const clientRepository = AppDataSource.getRepository(tClient)
		const revisionRepository = AppDataSource.getRepository(tEye)

		console.log("Vamos a probar cositas")
		const client = new tClient()
		client.NIF = "12345678A"
		client.NOMBRE = "Jorge"
		client.APELLIDOS = "Camacho el mas lindo"
		client.EDAD = 3
		await clientRepository.save(client)

		const clients = await clientRepository.find()
		console.log("Cargando todos los clientes de la base de datos:\n", clients)

		const revision = new tEye()
		revision.CLIENT = client
		revision.CONSULTA = "mi cama bb"
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
