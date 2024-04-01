import { config } from 'dotenv';
import {Sequelize} from 'sequelize'

//export default new Sequelize(
const sequelize = new Sequelize(
    process.env.DB_NAME,"shop",// база данных
    process.env.DB_USER,"postgres",// пользователь
    process.env.DB_PASS,"1235", // пароль
    {
        dialect: 'postgres',        
        dialectOptions: {
            host: "localhost", //process.env.DB_HOST
            port: '2000'//process.env.DB_PORT
          }
        // host: process.env.DB_HOST,
        // port: process.env.DB_PORT
        
    }
)
Sequelize.afterConnect();
module.exports = config
