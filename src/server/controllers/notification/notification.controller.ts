import {Body, Controller, Post} from "@nestjs/common";
import {NotificationService} from "../../services/notification/notification.service";
import {NotificationDto} from "../../models/notification";


@Controller("Notification")
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {}

    @Post("/notification")
    createNotification(@Body() data: NotificationDto) {
        return this.notificationService.createNotification(data)
    }
}