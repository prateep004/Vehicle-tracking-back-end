// src/modules/vehicles/entity.ts
import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "vehicles" })
export class Vehicles {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    vehicleId: string

    @Column()
    vehicleNm: string

    @CreateDateColumn()
    created_at: string

    @CreateDateColumn()
    updated_at: string
}