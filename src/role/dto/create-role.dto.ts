import { IsString } from "class-validator";
import { Owner } from "src/owner/entities/owner.entity";
import { OneToMany } from "typeorm";

export class CreateRoleDto {

    @IsString()
    name: ""
}
