import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateEntitys1732832654884 implements MigrationInterface {
    name = 'CreateEntitys1732832654884'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "workouts_history" ("id" varchar PRIMARY KEY NOT NULL, "comment" varchar(100) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
        await queryRunner.query(`CREATE TABLE "workout" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "description" varchar(100), "init_date" datetime NOT NULL, "end_date" datetime NOT NULL, "status" varchar(10) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
        await queryRunner.query(`CREATE TABLE "user" ("id" varchar PRIMARY KEY NOT NULL, "firstName" varchar(20) NOT NULL, "lastName" varchar(20) NOT NULL, "email" varchar(50) NOT NULL, "password" varchar(100) NOT NULL, "phone" varchar(11) NOT NULL, "dateOfBirth" datetime NOT NULL, "gender" varchar(6) NOT NULL, "country" varchar(2) NOT NULL, "state" varchar(2) NOT NULL, "city" varchar(50) NOT NULL, "address" varchar(100) NOT NULL, "house_number" varchar(10) NOT NULL, "house_number_addition" varchar(10) NOT NULL, "postal_code" varchar(8) NOT NULL, "role" varchar(10) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "status" varchar(10) NOT NULL, CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"))`);
        await queryRunner.query(`CREATE TABLE "workout_session" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "comment" varchar(100) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
        await queryRunner.query(`CREATE TABLE "physical_assessment" ("id" varchar PRIMARY KEY NOT NULL, "assessment_date" datetime NOT NULL, "weight" float, "height" float, "body_fat_percentage" float, "lean_mass" float, "observations" text, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime)`);
        await queryRunner.query(`CREATE TABLE "exercise" ("id" varchar PRIMARY KEY NOT NULL, "name" varchar(100) NOT NULL, "description" varchar(100) NOT NULL, "category" varchar(100) NOT NULL, "created_at" datetime NOT NULL DEFAULT (datetime('now')), "updated_at" datetime NOT NULL DEFAULT (datetime('now')), "deleted_at" datetime, "status" varchar(10) NOT NULL)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "exercise"`);
        await queryRunner.query(`DROP TABLE "physical_assessment"`);
        await queryRunner.query(`DROP TABLE "workout_session"`);
        await queryRunner.query(`DROP TABLE "user"`);
        await queryRunner.query(`DROP TABLE "workout"`);
        await queryRunner.query(`DROP TABLE "workouts_history"`);
    }

}
