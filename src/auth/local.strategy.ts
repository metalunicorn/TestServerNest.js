import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";

@Injectable()
export class localStrategy extends PassportStrategy(Strategy) {
    constructor(private authService: AuthService) {
        super()
    }

    async validate(name: string, passsword: string): Promise<any> {
        const user = await this.authService.validateUser(name, passsword);
        console.log(user)
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
    }
}