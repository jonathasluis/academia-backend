import { User } from '../../users/entities/user.entity';
import { WorkoutSession } from '../../workout-session/entities/workout-session.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToOne, JoinColumn} from 'typeorm';

@Entity()
export class Workout {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 100, nullable: false })
    name: string;

    @Column({ length: 100, nullable: true })
    description: string;

    @Column({ name: 'init_date' })
    initDate: Date;

    @Column({ name: 'end_date' })
    endDate: Date;

    @Column({ length: 10, nullable: false })
    status: 'active' | 'inactive';  // Status com valores limitados

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;

    @ManyToOne(() => User, (user) => user.workouts, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' }) // Nome da coluna no banco
    user: User;

    @ManyToOne(() => User, (user) => user.workouts, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'instructor_id' }) // Nome da coluna no banco
    instructor: User;

    @OneToMany(() => WorkoutSession, (workoutSession) => workoutSession.workout)
    workoutSessions: WorkoutSession[];
}
