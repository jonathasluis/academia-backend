import { Injectable } from '@nestjs/common';
import { CreatePhysicalAssessmentDto } from './dto/create-physical-assessment.dto';
import { UpdatePhysicalAssessmentDto } from './dto/update-physical-assessment.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PhysicalAssessment } from './entities/physical-assessment.entity';

@Injectable()
export class PhysicalAssessmentsService {

  constructor(
    @InjectRepository(PhysicalAssessment)
    private physicalAssessmentsRepository: Repository<PhysicalAssessment>,
  ) {}

  create(createPhysicalAssessmentDto: CreatePhysicalAssessmentDto) {
    return this.physicalAssessmentsRepository.save(createPhysicalAssessmentDto);
  }

  findAll() {
    return this.physicalAssessmentsRepository.find();
  }

  findOne(id: string) {
    return this.physicalAssessmentsRepository.findOneBy({id: id});
  }

  update(id: string, updatePhysicalAssessmentDto: UpdatePhysicalAssessmentDto) {
    return this.physicalAssessmentsRepository.update(id, updatePhysicalAssessmentDto);
  }

  remove(id: string) {
    return this.physicalAssessmentsRepository.delete(id);
  }
}
