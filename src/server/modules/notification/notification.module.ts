import { Module } from '@nestjs/common';
import { NotificationController } from "../../controllers/notification/notification.controller";
import { NotificationService } from "../../services/notification/notification.service";
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotificationEntity } from "../../services/notification/notification.entity";
import {UserEntity} from "../../services/user/user.entity";
import {AuthModule} from "../auth/auth.module";

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'postgres',
            host: 'localhost',
            port: 5432,
            username: 'postgres',
            password: 'postgres',
            database: 'postgres',
            synchronize: true,
            entities: [NotificationEntity, UserEntity],
        }),
        TypeOrmModule.forFeature([NotificationEntity, UserEntity]),
        AuthModule
    ],
    controllers: [NotificationController],
    providers: [NotificationService],
})
export class NotificationModule {}
