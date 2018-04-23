const MongoClient=require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    var db =client.db('TodoApp')
    if(err){
        console.log('Couldnot connect to MongoDB')
    }
    console.log('Connected to the Database Server')



    //client.close();
})