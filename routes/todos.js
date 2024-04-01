import { Router } from 'express'
export default 'todosRoutes'
import Todo from '../models/Todo.js'
const router = Router()

router.get('/', async (req, res) => {  //название ссылки
    const todos = await Todo.find({})
  
    res.render('index', {
      title: 'Todos list',
      isIndex: true,
      todos
    })
  })

  module.exports = router