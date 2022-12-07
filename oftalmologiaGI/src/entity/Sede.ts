import { Entity, PrimaryGeneratedColumn, Column, PrimaryColumn } from "typeorm"

@Entity("SEDE")
export class Sede {

    @PrimaryColumn()
    nombre: string

    @Column()
    responsable: string

}
