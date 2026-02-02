import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()   
  email : string;

  @Column()
  displayName: string;

  @Column({ unique: true })
  avatarUrl: string;

  @Column({select:false})
  password : string;

   @Column()
   bio : string;

    @Column()
    isActive : boolean;

  @Column({ default: 'user' })
  role: 'user' | 'admin' | 'shop';

  @CreateDateColumn()
  createdAt: Date;
}