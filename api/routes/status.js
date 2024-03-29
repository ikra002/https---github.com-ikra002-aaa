import express from 'express';
const router = express.Router();

// Роут для обновления статуса товара
router.put('/:id', (req, res) => {
    const productId = req.params.id;
    const newStatus = req.body.status;

    res.json({ message: `Обновление статуса товара с ID ${productId} на ${newStatus}` });
});

const statusRouter = require('./api/status');

app.use('/api/status', statusRouter);

module.exports = router;

		
