import { Injectable, } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
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

    // const newOwner = await this.ownerRepository.create()
    // newOwner.password = createOwnerDto.password
    // newOwner.name = createOwnerDto.name,
    //   await this.ownerRepository.save(newOwner);

    const newOwner = await this.ownerRepository
      .createQueryBuilder('NewOwners')
      .insert()
      .into(Owner)
      .values([
        { name: createOwnerDto.name, password: createOwnerDto.password }
      ])
      .execute()
    return `This action adds a new owner ${createOwnerDto.name}: ${createOwnerDto.password} `;
  }

  findAll() {
    return `This action returns all owner`;
  }

  findOnebyId(id: number) {
    return this.ownerRepository.findOne(id)
  }

  findOne(name: string) {
    return this.ownerRepository.findOne({ name })
  }


  update(id: number, updateOwnerDto: UpdateOwnerDto) {
    return `This action updates a #${id} owner`;
  }

  remove(id: number) {
    return `This action removes a #${id} owner`;
  }

}
