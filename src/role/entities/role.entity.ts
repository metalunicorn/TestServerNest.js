import { Owner } from "src/owner/entities/owner.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @OneToMany(() => Owner, (owner) => owner.role)
    owners: Owner[];
}
