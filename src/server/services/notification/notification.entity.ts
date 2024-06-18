import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UserEntity } from '../user/user.entity';

@Entity()
export class NotificationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name', length: 70, nullable: false })
  name: string;

  @Column({ name: 'dateStart', length: 50, nullable: false })
  dateStart: string;

  @ManyToOne(() => UserEntity, (user) => user.notifications)
  user: UserEntity;
}
