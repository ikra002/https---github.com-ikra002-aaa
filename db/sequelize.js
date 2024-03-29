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

// //module.exports = config;
