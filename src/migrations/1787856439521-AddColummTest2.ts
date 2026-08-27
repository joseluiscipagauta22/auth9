import { MigrationInterface, QueryRunner } from "typeorm";

export class AddColummTest21787856439521 implements MigrationInterface {
    name = 'AddColummTest21787856439521'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "test2" character varying(255) NOT NULL DEFAULT 'tu_valor_por_defecto2'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "test2"`);
    }

}
