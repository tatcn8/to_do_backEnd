// require that mongoose package! 
const mongoose = require('../db/connection')

// we want a schema with a title and a url 
const ToDoSchema = new mongoose.Schema({
    item: String
})

const ToDo = mongoose.model('ToDo', ToDoSchema)

// export it so other files can access it! 

module.exports = ToDo