import { Dog } from "src/dog/entities/dog.entity";
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


  @OneToMany(() => Dog, (dog) => dog.owner)
  dogs: Dog[];
}
