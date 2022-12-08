import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm"
import { tClient } from "./tClient"

@Entity()
export class tEye {

	@PrimaryGeneratedColumn({ type: "int" })
	ID: number

	@Column({ length: 250 })
	CONSULTA: string

	@Column({ type: "real" })
	OD_ESFERA: number

	@Column({ type: "real" })
	OD_CILINDRO: number

	@Column({ type: "real" })
	OD_ADICION: number

	@Column({ type: "real" })
	OD_AGUDEZA: number

	@Column({ type: "real" })
	OI_ESFERA: number

	@Column({ type: "real" })
	OI_CILINDRO: number

	@Column({ type: "real" })
	OI_ADICION: number

	@Column({ type: "real" })
	OI_AGUDEZA: number

	@ManyToOne(() => tClient, (client) => client.REVISIONES)
	CLIENT: tClient

}
