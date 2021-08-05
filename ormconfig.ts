module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Pass@123456',
    database: 'dogs',
    entities: ['dist/**/*.entity{.ts,.js}'],
    // synchronize: true,
    migrationsTableName: "custom_migration_table",
    migrations: ["migration/*.ts"],
    cli: {
        "migrationsDir": "migration"
    }
};
