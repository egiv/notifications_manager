import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../../modules/jwt.guard';
import { NotificationService } from '../../services/notification/notification.service';
import { NotificationDto } from '../../models/notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  createNotification(@Request() req, @Body() data: NotificationDto) {
    return this.notificationService.createNotification(req.user.userId, data);
  }
}
