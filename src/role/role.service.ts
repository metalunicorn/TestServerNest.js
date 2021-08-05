import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Owner } from 'src/owner/entities/owner.entity';
import { Repository } from 'typeorm';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './entities/role.entity';
@Injectable()
export class RoleService {

  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
  ) { }

  async create(createRoleDto: CreateRoleDto) {
    const newRole = await this.roleRepository
      .createQueryBuilder('NewRoles')
      .insert()
      .into(Role)
      .values([
        { name: createRoleDto.name, }
      ])
    return 'This action adds a new role';
  }

  findAll() {
    const allRoles = this.roleRepository.find()
    console.log(allRoles)
    return this.roleRepository.find();
  }

  findOne(id: number) {

    return this.roleRepository.findOne(id)
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}
