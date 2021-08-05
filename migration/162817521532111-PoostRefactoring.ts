import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from "typeorm";

export class PostRefactoring1628175453308 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "owner",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,

                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "password",
                    type: "varchar",
                },
                {
                    name: "age",
                    type: "varchar",
                },
            ]
        }), true)

        await queryRunner.addColumn("owner", new TableColumn({
            name: "roleId",
            type: "int",
        }))

        await queryRunner.createTable(new Table({
            name: "dog",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                },
            ]
        }), true)

        await queryRunner.addColumn("dog", new TableColumn({
            name: "ownerId",
            type: "int",
        }))

        await queryRunner.createTable(new Table({
            name: "role",
            columns: [
                {
                    name: "id",
                    type: "int",
                    isPrimary: true,
                },
                {
                    name: "name",
                    type: "varchar",
                }
            ]
        }))

        await queryRunner.createForeignKey("dog", new TableForeignKey({
            columnNames: ["ownerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "owner",
            onDelete: "CASCADE"
        }))

        await queryRunner.createForeignKey("owner", new TableForeignKey({
            columnNames: ["roleId"],
            referencedColumnNames: ["id"],
            referencedTableName: "role",
            onDelete: "CASCADE"
        }))

    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        const table = await queryRunner.getTable("owner");
        const foreignKey = table.foreignKeys.find(fk => fk.columnNames.indexOf("roleId") !== -1);
        const dogTable = await queryRunner.getTable("dog");
        const foreignKeyDog = dogTable.foreignKeys.find(fk => fk.columnNames.indexOf("ownerId") !== -1);
        await queryRunner.dropForeignKey("owner", foreignKey)
        await queryRunner.dropForeignKey("dog", foreignKeyDog);
        await queryRunner.dropTable("owner");
        await queryRunner.dropTable("dog");
        await queryRunner.dropTable("role");
    }


}
