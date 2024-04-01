import  Schema from 'sequelize'
export default 'Todo, new Schema'

const schema = new Schema({
  title: {
    type: String,
    required: true
  },
  completed: {
    type: Boolean,
    default: false
  }
})

module.exports = model('Todo', schema)