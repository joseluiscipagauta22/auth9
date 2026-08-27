import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1787844796228 implements MigrationInterface {
    name = 'InitialMigration1787844796228'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "test" character varying(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test"`);
    }

}
