// src/users/dto/create-user.dto.ts
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { IsEmail, IsString, IsBoolean, IsOptional, MinLength, MaxLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Nombre completo del usuario', example: 'Carlos Pérez', maxLength: 100 })
  @IsString()
  @MaxLength(100)
  name!: string;

  @ApiProperty({ description: 'Correo electrónico único', example: 'carlos@email.com', maxLength: 150 })
  @IsEmail()
  @MaxLength(150)
  email!: string;

  @ApiProperty({ description: 'Contraseña de acceso (mínimo 6 caracteres)', example: 'SecureP@ss123', minLength: 6 })
  @IsString()
  @MinLength(6)
  password!: string;

  @ApiProperty({ description: 'Estado activo del usuario', example: true, required: false, default: true })
  @IsBoolean()
  @IsOptional()
  isActive?: boolean;
}

export class UpdateUserDto extends PartialType(CreateUserDto) {}