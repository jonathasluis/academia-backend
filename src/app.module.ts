import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { ExercisesModule } from './exercises/exercises.module';
import { PhysicalAssessmentsModule } from './physical-assessments/physical-assessments.module';
import { WorkoutsHistoryModule } from './workouts-history/workouts-history.module';
import { config } from './ormconfig';

@Module({
  imports: [UsersModule, TypeOrmModule.forRoot(config) ,WorkoutsModule, ExercisesModule, PhysicalAssessmentsModule, WorkoutsHistoryModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
