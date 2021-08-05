import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OwnerModule } from './owner/owner.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DogModule } from './dog/dog.module';
import { DogController } from './dog/dog.controller';
import { DogService } from './dog/dog.service';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: true,
      autoLoadEntities: true,
      // migrationsTableName: 'custom_migration_table',
      // migrations: ['migration/*.ts'],
      // cli: {
      //   entitiesDir: 'src',
      //   migrationsDir: 'db/migrations',
      //   subscribersDir: 'db/subscribers',
      // },
    }),
    DogModule,
    OwnerModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
