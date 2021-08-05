import { Module } from '@nestjs/common';
import { DogService } from './dog.service';
import { DogController } from './dog.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dog } from './entities/dog.entity';
import { OwnerModule } from 'src/owner/owner.module';
import { Owner } from 'src/owner/entities/owner.entity';
import { OwnerService } from 'src/owner/owner.service';

@Module({
  imports: [TypeOrmModule.forFeature([Dog]), OwnerModule],
  controllers: [DogController],
  providers: [DogService],
  exports: [DogService],
})
export class DogModule { }
