import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  displayName: string;

  @Column({ select: false }) // Password sẽ không bị lộ khi dùng lệnh find() thông thường
  password: string;

  @Column({ default: true })
  isActive: boolean;

  @Column({ default: 'user' })
  role: 'user' | 'admin' | 'shop';

  @CreateDateColumn()
  createdAt: Date;
}