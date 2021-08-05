import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { OwnerModule } from 'src/owner/owner.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { localStrategy } from './local.strategy';

@Module({

  imports: [
    ConfigModule.forRoot(),
    OwnerModule,
    PassportModule,
    PassportModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      signOptions: { expiresIn: '60s' }
    })],
  providers: [AuthService, localStrategy, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule { }
