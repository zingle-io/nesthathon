import { User } from './../../user/entities/user.entity';
import { ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Photo {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(() => User, (user) => user.photos)
  user: User;
}
