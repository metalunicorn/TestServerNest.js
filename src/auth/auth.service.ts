import { Injectable } from '@nestjs/common';
import { OwnerService } from 'src/owner/owner.service';

@Injectable()
export class AuthService {
    constructor(private ownerService: OwnerService) { }

    async validateUser(name: string, password: string): Promise<any> {
        const user = await this.ownerService.findOne(name);
        return user
    }
}
