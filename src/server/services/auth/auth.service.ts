import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from '../user/user.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
        private jwtService: JwtService,
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersRepository.findOne({ where: { username } }); // Используйте where для поиска по имени пользователя
        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }

    async login(user: any) {
        const validatedUser = await this.validateUser(user.username, user.password);
        if (!validatedUser) {
            throw new Error('Invalid credentials');
        }
        const payload = { username: validatedUser.username, sub: validatedUser.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

    async register(registerDto: any) {
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(registerDto.password, salt);
        const newUser = this.usersRepository.create({
            username: registerDto.username,
            password: hashedPassword,
        });
        const savedUser = await this.usersRepository.save(newUser);
        const payload = { username: savedUser.username, sub: savedUser.id };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
