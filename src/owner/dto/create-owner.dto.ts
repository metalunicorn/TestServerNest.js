import {
    IsString,
    IsOptional,
} from "class-validator";

export class CreateOwnerDto {
    @IsOptional()
    @IsString()
    name: string;

}
