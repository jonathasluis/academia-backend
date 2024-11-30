import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { PhysicalAssessmentsModule } from './physical-assessments/physical-assessments.module';
import { WorkoutSessionModule } from './workout-session/workout-session.module';
import { UsersModule } from './users/users.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { ExercisesModule } from './exercises/exercises.module';
import { WorkoutsHistoryModule } from './workouts-history/workouts-history.module';


import { AppController } from './app.controller';
import { AppService } from './app.service';
import dataSource from './config/ormconfig';


@Module({
  imports: [
    UsersModule,
    WorkoutsModule,
    ExercisesModule,
    PhysicalAssessmentsModule,
    WorkoutsHistoryModule,
    WorkoutSessionModule, 
    TypeOrmModule.forRoot({...dataSource.options}),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
