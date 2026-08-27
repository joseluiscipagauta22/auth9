import { Controller, Get } from '@nestjs/common';
import { UsersService } from '../services/users.service';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener la lista de todos los usuarios' })
    @ApiResponse({ status: 200, description: 'Lista de usuarios obtenida correctamente.'})
    findAll() {
        return this.usersService.findAll();
    }

}
