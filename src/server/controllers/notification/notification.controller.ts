import { Body, Controller, Post, UseGuards, Request } from '@nestjs/common';
import { NotificationService } from '../../services/notification/notification.service';
import { NotificationDto } from '../../models/notification';
import {JwtAuthGuard} from "../../modules/jwt.guard";

@Controller('notification')
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {}

    @UseGuards(JwtAuthGuard)
    @Post('/create')
    createNotification(@Request() req, @Body() data: NotificationDto) {
        return this.notificationService.createNotification(req.user.userId, data);
    }
}
