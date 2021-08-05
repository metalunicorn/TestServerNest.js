import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owner/entities/owner.entity';
import { OwnerService } from 'src/owner/owner.service';
import { Repository } from 'typeorm';
import { CreateDogDto } from './dto/create-dog.dto';
import { UpdateDogDto } from './dto/update-dog.dto';
import { Dog } from './entities/dog.entity';

@Injectable()
export class DogService {
  constructor(
    @InjectRepository(Dog)
    private dogRepository: Repository<Dog>,
    private ownerService: OwnerService,
    //private ownerRepository: Repository<Owner>,
  ) { }

  async create(createDogDto: CreateDogDto) {

    const newDog = this.dogRepository.create()
    newDog.name = createDogDto.name,
      newDog.owner = await this.ownerService.findOne(createDogDto.ownerId);
    await this.dogRepository.save(newDog);
    return 'This action adds a new dog';
  }

  findAll() {
    return `This action returns all dog`;
  }

  findOne(id: number) {
    return `This action returns a #${id} dog`;
  }

  update(id: number, updateDogDto: UpdateDogDto) {
    return `This action updates a #${id} dog`;
  }

  remove(id: number) {
    return `This action removes a #${id} dog`;
  }
}
