require("env2")(".env");

module.exports = {
    'secret': 'supersecret',
    development: {
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASS,
        database: process.env.MYSQL_NAME,
        host: process.env.MYSQL_HOST,
        dialect: "mysql",
        timezone: process.env.TZ
    },
    test: {
        username: "root",
        password: null,
        database: "db_test",
        host: "127.0.0.1",
        dialect: "mysql",
        timezone: process.env.TZ
    },
    production: {
        username: "root",
        password: null,
        database: "db_production",
        host: "127.0.0.1",
        dialect: "mysql",
        timezone: process.env.TZ
    },
};
