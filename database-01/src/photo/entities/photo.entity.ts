import { User } from './../../user/entities/user.entity';
import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User)
  @JoinColumn()
  user: User;
}
