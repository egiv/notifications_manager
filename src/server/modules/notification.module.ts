import { Module } from '@nestjs/common';
import {NotificationController} from "../controllers/notification/notification.controller";
import {NotificationService} from "../services/notification/notification.service";

@Module({
    imports: [],
    controllers: [NotificationController],
    providers: [NotificationService],
})
export class NotificationModule {}
