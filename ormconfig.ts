module.exports = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'Pass@123456',
    database: 'cats',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
};
