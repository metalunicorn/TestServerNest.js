import { Dog } from "src/dog/entities/dog.entity";
import { Role } from "src/role/entities/role.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity()
export class Owner {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  password: string;

  @ManyToOne(() => Role, (role) => role.id)
  role: Role;

  @OneToMany(() => Dog, (dog) => dog.owner)
  dogs: Dog[];
}
