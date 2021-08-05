import {
    IsString,
    IsOptional,
    IsNumber,
} from "class-validator";

export class CreateOwnerDto {

    @IsOptional()
    @IsString()
    name: string;

    @IsString()
    password: string;

    @IsString()
    roleId: number;

    @IsNumber()
    age: number
}
