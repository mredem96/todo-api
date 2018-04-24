var mongoose=require('mongoose')

mongoose.Promise=global.Promise

mongoose.connect('mongodb://mredem96:lenovoideapad100@ds253959.mlab.com:53959/todo-api||mongodb://localhost:27017/TodoApp')

module.exports={mongoose} 