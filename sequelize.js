import {Sequelize} from 'sequelize'

export default new Sequelize(
    process.env.DB_NAME, // база данных
    process.env.DB_USER, // пользователь
    process.env.DB_PASS, // пароль
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
PORT=8000
DB_HOST=localhost
DB_NAME=shop
DB_USER=postgres
DB_PASS=1235
DB_PORT=5432
