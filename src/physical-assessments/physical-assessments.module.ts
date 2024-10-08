import { Module } from '@nestjs/common';
import { PhysicalAssessmentsService } from './physical-assessments.service';
import { PhysicalAssessmentsController } from './physical-assessments.controller';

@Module({
  controllers: [PhysicalAssessmentsController],
  providers: [PhysicalAssessmentsService],
})
export class PhysicalAssessmentsModule {}
