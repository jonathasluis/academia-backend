import { Exercise } from '../../exercises/entities/exercise.entity';
import { Workout } from '../../workouts/entities/workout.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany, ManyToMany, ManyToOne, JoinColumn} from 'typeorm';

@Entity()
export class WorkoutSession {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 100, nullable: false })
    name: string;

    @ManyToOne(() => Workout, (workout) => workout.workoutSessions, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'workout_id' }) // Nome da coluna no banco
    workout: Workout;

    @ManyToMany(() => Exercise)
    @JoinColumn({ name: 'exercise_id' }) // Nome da coluna no banco
    exercise: Exercise[];

    @Column({ length: 100, nullable: false })
    comment: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;
}
