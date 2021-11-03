// src/modules/coordinates/entity.ts
import { Column, Entity, CreateDateColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "coordinates" })
export class Coordinates {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    vehicleId: string

    @Column()
    latitude: number

    @Column()
    longitude: number

    @CreateDateColumn()
    created_at: string

    @CreateDateColumn()
    updated_at: string
}