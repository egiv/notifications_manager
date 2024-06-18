import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './server/modules/auth/auth.module';
import { NotificationModule } from './server/modules/notification/notification.module';
import { UserEntity } from './server/services/user/user.entity';
import { NotificationEntity } from './server/services/notification/notification.entity';
import { Module } from '@nestjs/common';

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
      entities: [UserEntity, NotificationEntity],
    }),
    AuthModule,
    NotificationModule,
  ],
})
export class AppModule {}
