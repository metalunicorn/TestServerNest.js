import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { OwnerModule } from 'src/owner/owner.module';
import { AuthService } from './auth.service';
import { localStrategy } from './local.strategy';

@Module({
  imports: [OwnerModule, PassportModule],
  providers: [AuthService, localStrategy]
})
export class AuthModule { }
