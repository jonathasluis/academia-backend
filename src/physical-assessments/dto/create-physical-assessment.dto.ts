import { IsString, IsNotEmpty, MaxLength, IsDate, IsNumber} from 'class-validator';

export class CreatePhysicalAssessmentDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    user_id: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    instructor_id: string;

    @IsDate()
    @IsNotEmpty()
    assessment_date: Date;

    @IsNotEmpty()
    @IsNumber()
    weight: number;

    @IsNotEmpty()
    @IsNumber()
    height: number;

    @IsNotEmpty()
    @IsNumber()
    body_fat_percentage: number;

    @IsNotEmpty()
    @IsNumber()
    lean_mass: number;

    @IsString()
    observations: string;
}
