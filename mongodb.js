const {MongoClient} = require('mongodb')
const databaseName = 'e-comm'
const url = 'mongodb://0.0.0.0:27017/';
const client = new MongoClient(url);

async function dbConnect(){
    let result = await client.connect();
    db = result.db(databaseName);
    return db.collection('products');
}
module.exports = dbConnect;