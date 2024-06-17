import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm';

@Entity()
export class NotificationEntity {
    @PrimaryGeneratedColumn()
    id: number;
    @Column({ name: 'name', length: 70, nullable: false })
    name: string;
    @Column({ name: 'dateStart', length: 50, nullable: false })
    dateStart: string;
}