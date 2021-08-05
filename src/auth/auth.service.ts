import { Injectable } from '@nestjs/common';
import { OwnerService } from 'src/owner/owner.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private ownerService: OwnerService,
        private jwtService: JwtService
    ) { }

    async validateUser(name: string, password: string): Promise<any> {
        const user = await this.ownerService.findOne(name);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.id }
        return {
            access_token: this.jwtService.sign(payload)
        }
    }
}
