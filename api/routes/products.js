import express from 'express';
const router = express.Router();

// Роут для получения информации о товарах
router.get('/', (req, res) => {
    res.json({ message: 'Получение информации о товарах' });
});

module.exports = router;
