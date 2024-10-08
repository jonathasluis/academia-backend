import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { ExercisesModule } from './exercises/exercises.module';
import { PhysicalAssessmentsModule } from './physical-assessments/physical-assessments.module';
import { WorkoutsHistoryModule } from './workouts-history/workouts-history.module';

@Module({
  imports: [UsersModule, WorkoutsModule, ExercisesModule, PhysicalAssessmentsModule, WorkoutsHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
