module_exports = {
    development: {
        database: {
            host: "localhost",
            port: 8080,
            name: "spoiler",
            dialect: 'mysql',
            user: 'root',
            password: '123456'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT
        }
    }
};