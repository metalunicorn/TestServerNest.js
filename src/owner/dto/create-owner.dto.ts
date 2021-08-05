import {
    IsString,
    IsOptional,
} from "class-validator";

export class CreateOwnerDto {
    @IsOptional()
    @IsString()
    name: string;
    @IsString()
    password: string;
    @IsString()
    roleId: number;
}
