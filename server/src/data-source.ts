import "reflect-metadata"
import { DataSource } from "typeorm"
import { tClient } from "./entity/tClient"
import { tEye } from "./entity/tEye"
require("dotenv").config();

export const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.HOST,
    port: Number(process.env.PORT),
    username: process.env.DB_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    synchronize: true,
    logging: false,
    entities: [tClient, tEye],
    migrations: [],
    subscribers: [],
})
