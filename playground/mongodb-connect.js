const MongoClient=require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
    var db =client.db('TodoApp')
    if(err){
        console.log('Couldnot connect to MongoDB')
    }
    console.log('Connected to the Database Server')

    db.collection('Todos').insertOne({
        text:'Something todo',
        completed:false
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert todo',err)
        }
        console.log(JSON.stringify(result.ops,undefined,2))
    })

    db.collection('Users').insertOne({
        name:'Hojiakbar',
        age:21,
        location:'Tashkent'
    },(err,result)=>{
        if(err){
            return console.log('Unable to insert user',err)
        }
        let count=0;
        console.log(`${count} is initilized`)
        while(count<result.ops.length){
            console.log(`${count} is now inside while`)
        console.log(result.ops[count]._id.getTimestamp())
        count++
        console.log(count)
        }
    })

    client.close();
})