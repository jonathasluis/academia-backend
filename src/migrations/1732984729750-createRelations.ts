import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateRelations1732984729750 implements MigrationInterface {
    name = 'CreateRelations1732984729750'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "temporary_physical_assessment" ("id" varchar PRIMARY KEY NOT NULL, "assessment_date" datetime NOT NULL, "weight" float, "height" float, "body_fat_percentage" float, "lean_mass" float, "observations" text, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "user_id" varchar, "instructor_id" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_physical_assessment"("id", "assessment_date", "weight", "height", "body_fat_percentage", "lean_mass", "observations", "created_at", "updated_at", "deleted_at") SELECT "id", "assessment_date", "weight", "height", "body_fat_percentage", "lean_mass", "observations", "created_at", "updated_at", "deleted_at" FROM "physical_assessment"`);
        await queryRunner.query(`DROP TABLE "physical_assessment"`);
        await queryRunner.query(`ALTER TABLE "temporary_physical_assessment" RENAME TO "physical_assessment"`);
        await queryRunner.query(`CREATE TABLE "temporary_workout" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "description" varchar(100), "init_date" datetime NOT NULL, "end_date" datetime NOT NULL, "status" varchar(10) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "user_id" varchar, "instructor_id" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_workout"("id", "name", "description", "init_date", "end_date", "status", "created_at", "updated_at", "deleted_at") SELECT "id", "name", "description", "init_date", "end_date", "status", "created_at", "updated_at", "deleted_at" FROM "workout"`);
        await queryRunner.query(`DROP TABLE "workout"`);
        await queryRunner.query(`ALTER TABLE "temporary_workout" RENAME TO "workout"`);
        await queryRunner.query(`CREATE TABLE "temporary_workout_session" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "comment" varchar(100) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "workout_id" varchar)`);
        await queryRunner.query(`INSERT INTO "temporary_workout_session"("id", "name", "comment", "created_at", "updated_at", "deleted_at") SELECT "id", "name", "comment", "created_at", "updated_at", "deleted_at" FROM "workout_session"`);
        await queryRunner.query(`DROP TABLE "workout_session"`);
        await queryRunner.query(`ALTER TABLE "temporary_workout_session" RENAME TO "workout_session"`);
        await queryRunner.query(`CREATE TABLE "temporary_workouts_history" ("id" varchar PRIMARY KEY NOT NULL, "comment" varchar(100) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "workout_session_id" varchar, CONSTRAINT "UQ_745575091a662072d6896e64cc7" UNIQUE ("workout_session_id"))`);
        await queryRunner.query(`INSERT INTO "temporary_workouts_history"("id", "comment", "created_at", "updated_at", "deleted_at") SELECT "id", "comment", "created_at", "updated_at", "deleted_at" FROM "workouts_history"`);
        await queryRunner.query(`DROP TABLE "workouts_history"`);
        await queryRunner.query(`ALTER TABLE "temporary_workouts_history" RENAME TO "workouts_history"`);
        await queryRunner.query(`CREATE TABLE "temporary_physical_assessment" ("id" varchar PRIMARY KEY NOT NULL, "assessment_date" datetime NOT NULL, "weight" float, "height" float, "body_fat_percentage" float, "lean_mass" float, "observations" text, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "user_id" varchar, "instructor_id" varchar, CONSTRAINT "FK_31333c63209c214453207ed34db" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_67db76fbd735798101a7dd88e4d" FOREIGN KEY ("instructor_id") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_physical_assessment"("id", "assessment_date", "weight", "height", "body_fat_percentage", "lean_mass", "observations", "created_at", "updated_at", "deleted_at", "user_id", "instructor_id") SELECT "id", "assessment_date", "weight", "height", "body_fat_percentage", "lean_mass", "observations", "created_at", "updated_at", "deleted_at", "user_id", "instructor_id" FROM "physical_assessment"`);
        await queryRunner.query(`DROP TABLE "physical_assessment"`);
        await queryRunner.query(`ALTER TABLE "temporary_physical_assessment" RENAME TO "physical_assessment"`);
        await queryRunner.query(`CREATE TABLE "temporary_workout" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "description" varchar(100), "init_date" datetime NOT NULL, "end_date" datetime NOT NULL, "status" varchar(10) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "user_id" varchar, "instructor_id" varchar, CONSTRAINT "FK_e92af579b7b9236feacf264b722" FOREIGN KEY ("user_id") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE NO ACTION, CONSTRAINT "FK_b26bc1c084d9c5f236cb9f8e7d8" FOREIGN KEY ("instructor_id") REFERENCES "user" ("id") ON DELETE SET NULL ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_workout"("id", "name", "description", "init_date", "end_date", "status", "created_at", "updated_at", "deleted_at", "user_id", "instructor_id") SELECT "id", "name", "description", "init_date", "end_date", "status", "created_at", "updated_at", "deleted_at", "user_id", "instructor_id" FROM "workout"`);
        await queryRunner.query(`DROP TABLE "workout"`);
        await queryRunner.query(`ALTER TABLE "temporary_workout" RENAME TO "workout"`);
        await queryRunner.query(`CREATE TABLE "temporary_workout_session" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "comment" varchar(100) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "workout_id" varchar, CONSTRAINT "FK_e98394789f20124827ae3dcab94" FOREIGN KEY ("workout_id") REFERENCES "workout" ("id") ON DELETE CASCADE ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_workout_session"("id", "name", "comment", "created_at", "updated_at", "deleted_at", "workout_id") SELECT "id", "name", "comment", "created_at", "updated_at", "deleted_at", "workout_id" FROM "workout_session"`);
        await queryRunner.query(`DROP TABLE "workout_session"`);
        await queryRunner.query(`ALTER TABLE "temporary_workout_session" RENAME TO "workout_session"`);
        await queryRunner.query(`CREATE TABLE "temporary_workouts_history" ("id" varchar PRIMARY KEY NOT NULL, "comment" varchar(100) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "workout_session_id" varchar, CONSTRAINT "UQ_745575091a662072d6896e64cc7" UNIQUE ("workout_session_id"), CONSTRAINT "FK_08cc1ca07f72b78564d220cc1a3" FOREIGN KEY ("workout_session_id") REFERENCES "workout_session" ("id") ON DELETE NO ACTION ON UPDATE NO ACTION)`);
        await queryRunner.query(`INSERT INTO "temporary_workouts_history"("id", "comment", "created_at", "updated_at", "deleted_at", "workout_session_id") SELECT "id", "comment", "created_at", "updated_at", "deleted_at", "workout_session_id" FROM "workouts_history"`);
        await queryRunner.query(`DROP TABLE "workouts_history"`);
        await queryRunner.query(`ALTER TABLE "temporary_workouts_history" RENAME TO "workouts_history"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "workouts_history" RENAME TO "temporary_workouts_history"`);
        await queryRunner.query(`CREATE TABLE "workouts_history" ("id" varchar PRIMARY KEY NOT NULL, "comment" varchar(100) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "workout_session_id" varchar, CONSTRAINT "UQ_745575091a662072d6896e64cc7" UNIQUE ("workout_session_id"))`);
        await queryRunner.query(`INSERT INTO "workouts_history"("id", "comment", "created_at", "updated_at", "deleted_at", "workout_session_id") SELECT "id", "comment", "created_at", "updated_at", "deleted_at", "workout_session_id" FROM "temporary_workouts_history"`);
        await queryRunner.query(`DROP TABLE "temporary_workouts_history"`);
        await queryRunner.query(`ALTER TABLE "workout_session" RENAME TO "temporary_workout_session"`);
        await queryRunner.query(`CREATE TABLE "workout_session" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "comment" varchar(100) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "workout_id" varchar)`);
        await queryRunner.query(`INSERT INTO "workout_session"("id", "name", "comment", "created_at", "updated_at", "deleted_at", "workout_id") SELECT "id", "name", "comment", "created_at", "updated_at", "deleted_at", "workout_id" FROM "temporary_workout_session"`);
        await queryRunner.query(`DROP TABLE "temporary_workout_session"`);
        await queryRunner.query(`ALTER TABLE "workout" RENAME TO "temporary_workout"`);
        await queryRunner.query(`CREATE TABLE "workout" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "description" varchar(100), "init_date" datetime NOT NULL, "end_date" datetime NOT NULL, "status" varchar(10) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "user_id" varchar, "instructor_id" varchar)`);
        await queryRunner.query(`INSERT INTO "workout"("id", "name", "description", "init_date", "end_date", "status", "created_at", "updated_at", "deleted_at", "user_id", "instructor_id") SELECT "id", "name", "description", "init_date", "end_date", "status", "created_at", "updated_at", "deleted_at", "user_id", "instructor_id" FROM "temporary_workout"`);
        await queryRunner.query(`DROP TABLE "temporary_workout"`);
        await queryRunner.query(`ALTER TABLE "physical_assessment" RENAME TO "temporary_physical_assessment"`);
        await queryRunner.query(`CREATE TABLE "physical_assessment" ("id" varchar PRIMARY KEY NOT NULL, "assessment_date" datetime NOT NULL, "weight" float, "height" float, "body_fat_percentage" float, "lean_mass" float, "observations" text, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "user_id" varchar, "instructor_id" varchar)`);
        await queryRunner.query(`INSERT INTO "physical_assessment"("id", "assessment_date", "weight", "height", "body_fat_percentage", "lean_mass", "observations", "created_at", "updated_at", "deleted_at", "user_id", "instructor_id") SELECT "id", "assessment_date", "weight", "height", "body_fat_percentage", "lean_mass", "observations", "created_at", "updated_at", "deleted_at", "user_id", "instructor_id" FROM "temporary_physical_assessment"`);
        await queryRunner.query(`DROP TABLE "temporary_physical_assessment"`);
        await queryRunner.query(`ALTER TABLE "workouts_history" RENAME TO "temporary_workouts_history"`);
        await queryRunner.query(`CREATE TABLE "workouts_history" ("id" varchar PRIMARY KEY NOT NULL, "comment" varchar(100) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
        await queryRunner.query(`INSERT INTO "workouts_history"("id", "comment", "created_at", "updated_at", "deleted_at") SELECT "id", "comment", "created_at", "updated_at", "deleted_at" FROM "temporary_workouts_history"`);
        await queryRunner.query(`DROP TABLE "temporary_workouts_history"`);
        await queryRunner.query(`ALTER TABLE "workout_session" RENAME TO "temporary_workout_session"`);
        await queryRunner.query(`CREATE TABLE "workout_session" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "comment" varchar(100) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
        await queryRunner.query(`INSERT INTO "workout_session"("id", "name", "comment", "created_at", "updated_at", "deleted_at") SELECT "id", "name", "comment", "created_at", "updated_at", "deleted_at" FROM "temporary_workout_session"`);
        await queryRunner.query(`DROP TABLE "temporary_workout_session"`);
        await queryRunner.query(`ALTER TABLE "workout" RENAME TO "temporary_workout"`);
        await queryRunner.query(`CREATE TABLE "workout" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "description" varchar(100), "init_date" datetime NOT NULL, "end_date" datetime NOT NULL, "status" varchar(10) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
        await queryRunner.query(`INSERT INTO "workout"("id", "name", "description", "init_date", "end_date", "status", "created_at", "updated_at", "deleted_at") SELECT "id", "name", "description", "init_date", "end_date", "status", "created_at", "updated_at", "deleted_at" FROM "temporary_workout"`);
        await queryRunner.query(`DROP TABLE "temporary_workout"`);
        await queryRunner.query(`ALTER TABLE "physical_assessment" RENAME TO "temporary_physical_assessment"`);
        await queryRunner.query(`CREATE TABLE "physical_assessment" ("id" varchar PRIMARY KEY NOT NULL, "assessment_date" datetime NOT NULL, "weight" float, "height" float, "body_fat_percentage" float, "lean_mass" float, "observations" text, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
        await queryRunner.query(`INSERT INTO "physical_assessment"("id", "assessment_date", "weight", "height", "body_fat_percentage", "lean_mass", "observations", "created_at", "updated_at", "deleted_at") SELECT "id", "assessment_date", "weight", "height", "body_fat_percentage", "lean_mass", "observations", "created_at", "updated_at", "deleted_at" FROM "temporary_physical_assessment"`);
        await queryRunner.query(`DROP TABLE "temporary_physical_assessment"`);
    }

}
