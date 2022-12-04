import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { MetricEntity } from './metric.entity';

@Entity({ name: 'agent' })
export class AgentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  @Generated('uuid')
  uuid: string;

  @Column({ nullable: false })
  username: string;

  @Column({ nullable: false })
  user: string;

  @Column({ nullable: false })
  hostname: string;

  @Column({ nullable: false })
  pid: number;

  @Column({ nullable: false, default: false })
  connected: boolean;

  @OneToMany(() => MetricEntity, (metric) => metric.agent)
  metrics: MetricEntity[];
}
