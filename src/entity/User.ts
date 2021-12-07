import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
} from 'typeorm';

@Entity()
class User {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    firstName: string;

  @Column()
    lastName: string;

  @Column()
    accoutNumber: number;

  @Column()
    accountDigit: number;

  @Column()
    wallet: number;

  @Column()
    email: string;

  @Column()
    password: string;
}

export default User;
