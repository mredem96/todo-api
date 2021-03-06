var express=require('express')
var bodyParser=require('body-parser')
const {ObjectID}=require('mongodb')
var {mongoose}=require('./db/mongoose')
var {Todo}=require('./modules/todo')
var {User}=require('./modules/user')

var app =express()
const port=process.env.PORT||3000;
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

app.get('/todos',(req,res)=>{
    Todo.find().then((todos)=>{
        res.send(todos)
    },(err)=>{
        res.status(400).send(err)
    })
})

app.get('todos/:id',(req,res)=>{
    var id =req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send()
    }

    Todo.findById(id).then((todo)=>{
        if(todo){
            res.send({todo})
        }
        res.status(404).send()
    },(e)=>{
        res.status(400).send()
    })
})

app.listen(port,()=>{
    console.log(`Server listening on port ${port}`)
})

