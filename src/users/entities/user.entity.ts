import { PhysicalAssessment } from '../../physical-assessments/entities/physical-assessment.entity';
import { Workout } from '../../workouts/entities/workout.entity';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn, OneToMany} from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({ length: 20, nullable: false })
    firstName: string;

    @Column({ length: 20, nullable: false })
    lastName: string;

    @Column({ length: 50, unique: true, nullable: false })
    email: string;

    @Column( { length: 100, nullable: false })
    password: string;

    @Column( { length: 11, nullable: false })
    phone: string;

    @Column()
    dateOfBirth: Date;

    @Column({ length: 6 })
    gender: 'male' | 'female' | 'other';  // Enum ou string limitada a valores específicos

    @Column({ length: 2, nullable: false })
    country: string;

    @Column( { length: 2, nullable: false })
    state: string;

    @Column( { length: 50, nullable: false })
    city: string;

    @Column( { length: 100, nullable: false })
    address: string;

    @Column( { name:'house_number', length: 10, nullable: false })
    houseNumber: string;

    @Column( { name:'house_number_addition', length: 10 })
    houseNumberAddition?: string;  // Campo opcional

    @Column( { name:'postal_code', length: 8, nullable: false })
    postalCode: string;

    @Column( { length: 10, nullable: false })
    role: 'admin' | 'user' | 'guest';  // Pode usar enum para definir tipos de usuário

    @CreateDateColumn({ name: 'created_at' })
    createdAt: string;
  
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: string;
  
    @DeleteDateColumn({ name: 'deleted_at' })
    deletedAt: string;

    @Column( { length: 10, nullable: false })
    status: 'active' | 'inactive';  // Status com valores limitados

    @OneToMany(() => PhysicalAssessment, (avaliacao) => avaliacao.user)
    avaliacoesClente: PhysicalAssessment[];

    @OneToMany(() => PhysicalAssessment, (avaliacao) => avaliacao.instructor)
    avaliacoesInstrutor: PhysicalAssessment[];

    @OneToMany(() => Workout, (workout) => workout.user)
    workouts: Workout[];

    @OneToMany(() => Workout, (workout) => workout.instructor)
    workoutsInstructor: Workout[];
}
