import { WorkoutSession } from 'src/workout-session/entities/workout-session.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, OneToOne, JoinColumn} from 'typeorm';

@Entity()
export class WorkoutsHistory {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 100, nullable: false })
    comment: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;

    @OneToOne(() => WorkoutSession)
    @JoinColumn({name:'workout_session_id'})
    workoutSession: WorkoutSession;
}
