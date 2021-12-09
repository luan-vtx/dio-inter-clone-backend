/* eslint-disable import/extensions */
/* eslint-disable import/no-unresolved */
import {
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  Column,
  CreateDateColumn,
  ManyToOne,
  UpdateDateColumn,
} from 'typeorm';

// SE ALGUMA COISA NÃO FUNCIONAR É PRA TENTAR VER SE O ERRO ESTA VINDO DESSE IMPORT BUGADO AQUI
import User from './User';

@Entity()
class Pix {
  @PrimaryGeneratedColumn('uuid')
    id: string;

  @Column()
    status: string;

  @ManyToOne(() => User, (user) => user.id)
  @JoinColumn()
    requestingUser: User;

  @ManyToOne(() => User, (user) => user.id, { nullable: true })
  @JoinColumn()
    payingUser: User;

  @Column()
    value: number;

  @CreateDateColumn()
    createdAt: Date;

  @UpdateDateColumn()
    updatedAt: Date;
}

export default Pix;
