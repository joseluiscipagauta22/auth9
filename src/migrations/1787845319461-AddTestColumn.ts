import { MigrationInterface, QueryRunner } from "typeorm";

export class AddTestColumn1787845319461 implements MigrationInterface {
    name = 'AddTestColumn1787845319461'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "test" character varying(255) NOT NULL DEFAULT 'tu_valor_por_defecto'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test"`);
    }

}
