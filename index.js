import express from 'express'
import exphbs from 'express-handlebars'
//import fileUpload from 'express-fileupload'
//import session from 'express-session'
//import cookieParser from 'cookie-parser'
import sequelize from './sequelize.js'

//const api=require('./api/routes/products')

// Подключение необходимых модулей
import bodyParser from 'body-parser';

const PORT = process.env.PORT || 2000
// Создание приложения Express
const app = express();
const hbs = exphbs.create({
    defaultLayout:'main',
    extname:"hbs"
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views','views')

// Промежуточное ПО для обработки JSON данных
app.use(bodyParser.json());

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
        app.listen(PORT, () => console.log(`Сервер запущен на http://localhost:${PORT}`));
    } catch(e) {
        console.log(e)
    }
}

start()