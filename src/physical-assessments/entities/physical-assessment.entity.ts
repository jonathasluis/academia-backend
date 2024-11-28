import { User } from 'src/users/entities/user.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, JoinColumn, ManyToOne} from 'typeorm';

@Entity()
export class PhysicalAssessment {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @ManyToOne(() => User, (user) => user.avaliacoesClente, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'user_id' }) // Nome da coluna no banco
    user: User;

    @ManyToOne(() => User, (user) => user.avaliacoesInstrutor, { onDelete: 'SET NULL' })
    @JoinColumn({ name: 'instructor_id' }) // Nome da coluna no banco
    instructor: User;

    @Column({ name: 'assessment_date' })
    assessmentDate: Date;

    @Column({ type: 'float', nullable: true })
    weight: number;
  
    @Column({ type: 'float', nullable: true })
    height: number;

    @Column({ type: 'float', name: 'body_fat_percentage', nullable: true })
    bodyFatPercentage: number;

    @Column({ type: 'float', name: 'lean_mass', nullable: true })
    leanMass: number;

    @Column({ type: 'text', nullable: true })
    observations: string;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;
}
