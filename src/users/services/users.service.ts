import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from '../dtos/create-user.dto';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) { }

    // Consulta simple a la BD usando la entidad
    async findAll(): Promise<User[]> {
        return await this.userRepository.find();
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        // 1. Crea una instancia de la entidad User con los datos recibidos
        const newUser = this.userRepository.create(createUserDto);
        // 2. Guarda la entidad en la base de datos
        return await this.userRepository.save(newUser);
    }

    async remove(id: string): Promise<void> {
        // 1. Buscamos el usuario para validar que exista
        const user = await this.userRepository.findOne({ where: { id } });
        
        if (!user) {
            throw new NotFoundException(`Usuario con ID ${id} no encontrado`);
        }

        // 2. Lo eliminamos de la base de datos
        await this.userRepository.remove(user);
    }
}
