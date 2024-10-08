import { Injectable } from '@nestjs/common';
import { CreatePhysicalAssessmentDto } from './dto/create-physical-assessment.dto';
import { UpdatePhysicalAssessmentDto } from './dto/update-physical-assessment.dto';

@Injectable()
export class PhysicalAssessmentsService {
  create(createPhysicalAssessmentDto: CreatePhysicalAssessmentDto) {
    return 'This action adds a new physicalAssessment';
  }

  findAll() {
    return `This action returns all physicalAssessments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} physicalAssessment`;
  }

  update(id: number, updatePhysicalAssessmentDto: UpdatePhysicalAssessmentDto) {
    return `This action updates a #${id} physicalAssessment`;
  }

  remove(id: number) {
    return `This action removes a #${id} physicalAssessment`;
  }
}
