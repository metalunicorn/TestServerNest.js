import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateOwnerDto } from './dto/create-owner.dto';
import { UpdateOwnerDto } from './dto/update-owner.dto';
import { Owner } from './entities/owner.entity';

@Injectable()
export class OwnerService {

  constructor(
    @InjectRepository(Owner)
    private ownerRepository: Repository<Owner>,
  ) { }

  async create(createOwnerDto: CreateOwnerDto) {

    const newOwner = await this.ownerRepository.create()
    newOwner.name = createOwnerDto.name,
      await this.ownerRepository.save(newOwner);
    console.log(newOwner);
    return 'This action adds a new owner';
  }

  findAll() {
    return `This action returns all owner`;
  }

  findOne(id: number) {
    return this.ownerRepository.findOne(id)
  }

  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }
}
