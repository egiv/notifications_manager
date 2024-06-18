import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import {NotificationEntity} from "../notification/notification.entity";

@Entity()
export class UserEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    username: string;

    @Column()
    password: string;

    @OneToMany(() => NotificationEntity, notification => notification.user)
    notifications: NotificationEntity[];
}
