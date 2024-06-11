import { Injectable } from '@nestjs/common';
import {NotificationProps} from "../../models/notification";

@Injectable()
export class NotificationService {
    createNotification(data: NotificationProps): void {
        console.log(data)
        console.log("createNotification")
    }
}
