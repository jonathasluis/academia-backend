import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PhysicalAssessmentsService } from './physical-assessments.service';
import { CreatePhysicalAssessmentDto } from './dto/create-physical-assessment.dto';
import { UpdatePhysicalAssessmentDto } from './dto/update-physical-assessment.dto';

@Controller('physical-assessments')
export class PhysicalAssessmentsController {
  constructor(private readonly physicalAssessmentsService: PhysicalAssessmentsService) {}

  @Post()
  create(@Body() createPhysicalAssessmentDto: CreatePhysicalAssessmentDto) {
    return this.physicalAssessmentsService.create(createPhysicalAssessmentDto);
  }

  @Get()
  findAll() {
    return this.physicalAssessmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.physicalAssessmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhysicalAssessmentDto: UpdatePhysicalAssessmentDto) {
    return this.physicalAssessmentsService.update(+id, updatePhysicalAssessmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.physicalAssessmentsService.remove(+id);
  }
}
