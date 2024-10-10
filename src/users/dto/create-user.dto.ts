import { IsString, IsEmail, IsNotEmpty, MinLength, MaxLength, IsEnum, IsOptional, IsDate, IsPhoneNumber } from 'class-validator';
import { Type } from 'class-transformer';

enum Gender {
    MALE = 'male',
    FEMALE = 'female',
    OTHER = 'other',
}

enum Role {
    ADMIN = 'admin',
    USER = 'user',
    GUEST = 'guest',
}

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(20)
    lastName: string;

    @IsEmail()
    @IsNotEmpty()
    @MaxLength(50)
    email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @MaxLength(100)
    password: string;

    @IsPhoneNumber()  // 'ZZ' é para qualquer país, pode ajustar conforme o caso
    @IsNotEmpty()
    @MaxLength(11)
    phone: string;

    @IsDate()
    @Type(() => Date)  // Converte o input em uma instância de Date
    @IsNotEmpty()
    dateOfBirth: Date;

    @IsEnum(Gender)
    @IsNotEmpty()
    gender: Gender;

    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    country: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(2)
    state: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(50)
    city: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    address: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(10)
    houseNumber: string;

    @IsString()
    @IsOptional()  // Opcional
    @MaxLength(10)
    houseNumberAddition?: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(8)
    postalCode: string;

    @IsEnum(Role)
    @IsNotEmpty()
    role: Role;
}
