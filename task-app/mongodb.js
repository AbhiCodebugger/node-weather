// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient

const { MongoClient, ObjectID } = require('mongodb')
const connectionUrl = 'mongodb://127.0.0.1:27017'

const databaseName = 'task-manager'

// const id = new ObjectID()
// console.log(id.id);
// console.log(id.toHexString())

MongoClient.connect(connectionUrl, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to Database')
    }
    const db = client.db(databaseName)

    // db.collection('task').findOne({_id: new ObjectID('63749dee69b6b670a99ee191')}, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to find the match')
    //     }
    //      console.log(result)

    // })
    // db.collection('task').find({completed: false}).toArray((error,task)=>{
    //     console.log(task)
    // })
    // db.collection('users').find({age: 26}).count((error,count)=>{
    //     console.log(count)
    // })
    // db.collection('users').insertOne({
    //     name: 'Abhinav',
    //     age: 26
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'Abhinav',
    //         age: 26,
    //     },
    //     {
    //         name: 'Ranjan',
    //         age: 25,
    //     },
    // ], (error, result)=>{
    //     if(error){
    //         return console.log('Unable to insert documents')
    //     }
    //     console.log(result);
    // })
    // db.collection('task').insertMany([
    //     {
    //         description : 'Fill the NM',
    //         completed: true,
    //     },
    //     {
    //         description : 'Buy eggs',
    //         completed: true,
    //     },{
    //         description : 'Learn NodeJS',
    //         completed: false,
    //     }
    // ],(error,result)=>{
    //     if(error){
    //         return console.log('Unable to insert document');
    //     }else{
    //         console.log(result);
    //     }
    // })
    // db.collection('users').updateOne({_id: new ObjectID('63063cfde37126166d935a97')},{
    //     $set:{
    //         name: "Milang"
    //     }
    // }).then((result)=>{
    //     console.log(result)
    // }).catch((error)=>{
    //     console.log(error)
    // })
    db.collection('task').updateMany({
completed: true
    }, {
        $set: {
            completed: false
        }
    }).then((task)=>{
        console.log(task)
    }).catch((error)=>{
        console.log(error)
    })
})
