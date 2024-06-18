import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {NotificationEntity} from "../../services/notification/notification.entity";
import {UserEntity} from "../../services/user/user.entity";
import {NotificationService} from "../../services/notification/notification.service";
import {NotificationController} from "../../controllers/notification/notification.controller";

@Module({
    imports: [TypeOrmModule.forFeature([NotificationEntity, UserEntity])],
    controllers: [NotificationController],
    providers: [NotificationService],
})
export class NotificationModule {}
