const MongoClient=require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    var db =client.db('TodoApp')
    if(err){
        console.log('Couldnot connect to MongoDB')
    }
    console.log('Connected to the Database Server')

    db.collection('Todos').find().toArray().then((docs)=>{
        console.log('Todos');
        console.log(JSON.stringify(docs,undefined,2))
    },(err)=>{
        console.log('Unable to fetch todos',err)
    })

     
    // client.close();


})