import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, DeleteDateColumn} from 'typeorm';

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

    @Column( { length: 10, nullable: false })
    houseNumber: string;

    @Column( { length: 10 })
    houseNumberAddition?: string;  // Campo opcional

    @Column( { length: 8, nullable: false })
    postalCode: string;

    @Column( { length: 10, nullable: false })
    role: 'admin' | 'user' | 'guest';  // Pode usar enum para definir tipos de usuário

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date | null;  // Pode ser null inicialmente

    @DeleteDateColumn()
    deletedAt: Date | null;  // Pode ser null se não deletado

    @Column( { length: 10, nullable: false })
    status: 'active' | 'inactive';  // Status com valores limitados
}
