import { Injectable } from '@nestjs/common';
import { CreateExerciseDto } from './dto/create-exercise.dto';
import { UpdateExerciseDto } from './dto/update-exercise.dto';
import { Exercise } from './entities/exercise.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ExercisesService {

  constructor(
    @InjectRepository(Exercise)
    private exerciseRepository: Repository<Exercise>,
  ) {}

  create(createExerciseDto: CreateExerciseDto) {
    return this.exerciseRepository.save(createExerciseDto);
  }

  findAll() {
    return this.exerciseRepository.find();
  }

  findOne(id: string) {
    return this.exerciseRepository.findOneBy({ id: id });
  }

  update(id: string, updateExerciseDto: UpdateExerciseDto) {
    return this.exerciseRepository.update(id, updateExerciseDto);
  }

  remove(id: string) {
    return this.exerciseRepository.delete(id);
  }
}
