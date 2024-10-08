import { PartialType } from '@nestjs/mapped-types';
import { CreateWorkoutsHistoryDto } from './create-workouts-history.dto';

export class UpdateWorkoutsHistoryDto extends PartialType(CreateWorkoutsHistoryDto) {}
