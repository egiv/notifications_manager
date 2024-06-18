import {Module} from '@nestjs/common';
import {JwtModule} from '@nestjs/jwt';
import {PassportModule} from '@nestjs/passport';
import {TypeOrmModule} from '@nestjs/typeorm';
import {JwtStrategy} from "../jwt.strategy";
import {UserEntity} from "../../services/user/user.entity";
import {AuthController} from "../../controllers/auth/auth.controller";
import {AuthService} from "../../services/auth/auth.service";

@Module({
    imports: [
        PassportModule,
        JwtModule.register({
            secret: 'secretKey', // Используйте безопасный ключ в реальном проекте
            signOptions: { expiresIn: '60m' },
        }),
        TypeOrmModule.forFeature([UserEntity]),
    ],
    providers: [AuthService, JwtStrategy],
    controllers: [AuthController],
    exports: [AuthService],
})
export class AuthModule {}
