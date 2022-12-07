import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm"
import { tEye } from "./tEye"

@Entity()
export class tClient {

    @PrimaryColumn({ length: 50 })
    NIF: string

    @Column({ length: 250 })
    NOMBRE: string

    @Column({ length: 250 })
    APELLIDOS: string

    @Column({ type: "int" })
    EDAD: number

		@OneToMany(() => tEye, (teye) => teye.CLIENT)
		REVISIONES: tEye[]

}
