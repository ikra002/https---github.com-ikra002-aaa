import express from 'express'
import config from 'dotenv/config'  //для связи с env
import exphbs from 'express-handlebars'
//import fileUpload from 'express-fileupload'
//import session from 'express-session'
//import cookieParser from 'cookie-parser'
//import sequelize from './db/sequelize.js'
import { Sequelize } from 'sequelize'

const PORT = process.env.PORT || 2000

const app = express();

// app.get('/',(req,res)=>{
//     res.send("me")  //эта штука пишет на главном экране ме, приколдес
// })

const sequelize = new Sequelize('shop','postgres','1235',{
    dialect: "postgres",
    host:"localhost"
})

const hbs = exphbs.create({
    defaultLayout:'main',
    extname:"hbs"
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')

// Роут для получения информации о товарах
app.get('./api/products.js', (req, res) => {
    res.json({ message: 'Получение информации о товарах' });
});

// Роут для обновления статуса товара
app.put('./api/products/:id', (req, res) => {
    const productId = req.params.id;
    const newStatus = req.body.status;
    res.json({ message: `Обновление статуса товара с ID ${productId} на ${newStatus}` });
});

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        
        app.listen(PORT, () => console.log(`Сервер запущен`));
    } catch(e) {
        console.log(e)
    }
}

start()
