import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { WorkoutsModule } from './workouts/workouts.module';
import { ExercisesModule } from './exercises/exercises.module';
import { PhysicalAssessmentsModule } from './physical-assessments/physical-assessments.module';
import { WorkoutsHistoryModule } from './workouts-history/workouts-history.module';
import dataSource from './config/ormconfig';
import { WorkoutSessionModule } from './workout-session/workout-session.module';

@Module({
  imports: [
    UsersModule,
    WorkoutsModule,
    ExercisesModule,
    PhysicalAssessmentsModule,
    WorkoutsHistoryModule,
    WorkoutSessionModule, 
    TypeOrmModule.forRoot(dataSource.options),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
