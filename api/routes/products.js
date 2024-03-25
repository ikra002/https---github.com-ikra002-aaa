const express = require('express');
const router = express.Router();

// Роут для получения информации о товарах
router.get('/', (req, res) => {

// список товаров выбранной категории
router.get('/getall/categoryId/:categoryId([0-9]+)', ProductController.getAll)
// список всех товаров каталога
router.get('/getall', ProductController.getAll)
// получить один товар каталога
router.get('/getone/:id([0-9]+)', ProductController.getOne)

// список свойств товара
router.get('/:productId([0-9]+)/property/getall', ProductPropController.getAll)
// одно свойство товара
router.get('/:productId([0-9]+)/property/getone/:id([0-9]+)', ProductPropController.getOne)
// создать свойство товара
router.post(
    '/:productId([0-9]+)/property/create',
    authMiddleware,
    adminMiddleware,
    ProductPropController.create
)
// обновить свойство товара
router.put(
    '/:productId([0-9]+)/property/update/:id([0-9]+)',
    authMiddleware,
    adminMiddleware,
    ProductPropController.update
)
// удалить свойство товара
router.delete(
    '/:productId([0-9]+)/property/delete/:id([0-9]+)',
    authMiddleware,
    adminMiddleware,
    ProductPropController.delete
)
    res.json({ message: 'Получение информации о товарах' });
});

module.exports = router;