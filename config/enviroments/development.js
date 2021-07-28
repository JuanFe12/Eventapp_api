module.export = {
    PORT: process.env.PORT,
    DB: {
        user: process.env.USER,
        password: process.env.PASSWORD,
        database: process.env.DATABASE,
        host: process.env.LOCALHOST,
        dialect: "postgres"
    }
}