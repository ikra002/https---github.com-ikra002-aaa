import {Sequelize} from 'sequelize'

//module.exports = config;

export default new Sequelize(
    process.env.DB_NAME,"shop",// база данных
    process.env.DB_USER,"postgres",// пользователь
    process.env.DB_PASS,"1235", // пароль
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

// //module.exports = config;