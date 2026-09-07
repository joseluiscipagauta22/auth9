import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Post } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from '../dtos/create-user.dto';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener la lista de todos los usuarios' })
    @ApiResponse({ status: 200, description: 'Lista de usuarios obtenida correctamente.'})
    findAll() {
        return this.usersService.findAll();
    }

    @Post()
    @ApiOperation({ summary: 'Crear un nuevo usuario' })
    @ApiResponse({ status: 201, description: 'El usuario ha sido creado exitosamente.' })
    @ApiResponse({ status: 400, description: 'Datos de entrada inválidos.' })
    create(@Body() createUserDto: CreateUserDto) {
        return this.usersService.create(createUserDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar un usuario por su ID (UUID)' })
    @ApiParam({ name: 'id', description: 'UUID del usuario a eliminar', type: 'string' })
    @ApiResponse({ status: 200, description: 'El usuario ha sido eliminado exitosamente.' })
    @ApiResponse({ status: 404, description: 'Usuario no encontrado.' })
    remove(@Param('id', ParseUUIDPipe) id: string) {
        return this.usersService.remove(id);
    }

}
