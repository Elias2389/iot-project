import {
  Column,
  Entity,
  Generated,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AgentEntity } from './agent.entity';

@Entity({ name: 'metric' })
export class MetricEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  type: string;

  @Column({ nullable: false, type: 'text' })
  value: string;

  @ManyToOne(() => AgentEntity, (user) => user.metrics)
  agent: AgentEntity;
}
