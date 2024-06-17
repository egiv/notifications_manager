import { Injectable } from '@nestjs/common';
import {NotificationDto} from "../../models/notification";
import {InjectRepository} from "@nestjs/typeorm";
import { Repository } from 'typeorm';
import {NotificationEntity} from "./notification.entity";

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(NotificationEntity)
        private readonly notificationsRepository: Repository<NotificationEntity>,
    ) {}


    async createNotification(dataDto: NotificationDto) {
        console.log('createNotification')
        console.debug('dataDto', dataDto)
        const data = this.notificationsRepository.create(dataDto)
        return await this.notificationsRepository.save(data);
    }
}
