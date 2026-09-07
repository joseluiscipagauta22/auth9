import { MigrationInterface, QueryRunner } from "typeorm";

export class CleanColumns1788378851336 implements MigrationInterface {
    name = 'CleanColumns1788378851336'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test2"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "test2" character varying(255) NOT NULL DEFAULT 'tu_valor_por_defecto2'`);
        await queryRunner.query(`ALTER TABLE "users" ADD "test" character varying(255) NOT NULL DEFAULT 'tu_valor_por_defecto'`);
    }

}
