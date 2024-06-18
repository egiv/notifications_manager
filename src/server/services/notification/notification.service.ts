import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificationEntity } from './notification.entity';
import { UserEntity } from '../user/user.entity';
import { NotificationDto } from '../../models/notification.dto';
@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationsRepository: Repository<NotificationEntity>,
    @InjectRepository(UserEntity)
    private readonly usersRepository: Repository<UserEntity>,
  ) {}

  async createNotification(userId: number, dataDto: NotificationDto) {
    const user = await this.usersRepository.findOne({ where: { id: userId } }); // Используйте where для поиска по имени пользователя
    if (!user) {
      throw new Error('User not found');
    }
    const notification = this.notificationsRepository.create({
      ...dataDto,
      user: user,
    });
    return await this.notificationsRepository.save(notification);
  }
}
