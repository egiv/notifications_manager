import {Body, Controller, Post} from "@nestjs/common";
import {NotificationService} from "../../services/notification/notification.service";
import {NotificationProps} from "../../models/notification";


@Controller("Notification")
export class NotificationController {
    constructor(private readonly notificationService: NotificationService) {}

    @Post("/notification")
    createNotification(@Body() data: NotificationProps): void {
        return this.notificationService.createNotification(data)
    }
}