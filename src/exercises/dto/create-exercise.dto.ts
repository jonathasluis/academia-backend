import { IsString, IsNotEmpty, MaxLength, IsEnum} from 'class-validator';

enum Status {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
}

enum Category {
    CARDIO = 'cardio',
    BACK = 'back',
    CHEST = 'chest',
    LEGS = 'legs',
    SHOULDERS = 'shoulders',
    BICEPS = 'biceps',
    TRICEPS = 'triceps',
    ABS = 'abs',
    GLUTES = 'glutes',
}

export class CreateExerciseDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    name: string;
  
    @IsString()
    @IsNotEmpty()
    @MaxLength(100)
    description: string;
  
    @IsEnum(Category)
    @IsNotEmpty()
    @MaxLength(100)
    category: Category;
  
    @IsEnum(Status)
    @IsNotEmpty()
    status: Status;
}
 