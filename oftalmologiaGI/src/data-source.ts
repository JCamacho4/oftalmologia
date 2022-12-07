import "reflect-metadata"
import { DataSource } from "typeorm"
import { User } from "./entity/User"

export const AppDataSource = new DataSource({
    type: "mysql",
    host: "database-pevau.cobadwnzalab.eu-central-1.rds.amazonaws.com",
    port: 3306,
    username: "grupo16",
    password: "gLeyR5vXhrRUjqmX",
    database: "grupo16DB",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})
