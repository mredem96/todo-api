var express=require('express')
var bodyParser=require('body-parser')

var {mongoose}=require('./db/mongoose')
var {Todo}=require('./modules/todo')
var {User}=require('./modules/user')

var app =express()

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
    var todo=new Todo({
        text:req.body.text
    })

    todo.save().then((doc)=>{
        console.log(req.body)
        res.send(doc)
    },(e)=>{
        console.log('unable to post')
        res.status(400).send(e)
    })
})

app.listen(3000,()=>{
    console.log('Server listening port 3000')
})

