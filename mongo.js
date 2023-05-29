const {MongoClient} = require('mongodb')
//importing mongodb package

const url = 'mongodb://0.0.0.0:27017/e-comm';
const database = 'e-comm'
const client = new MongoClient(url)

async function getdata(){
    try {
      console.log("12")
    let result = await client.connect(); 
    console.log("12")
    console.log(result);
    // client return promise iliye hamne await likha hai 
    let db = result.db(database);
    //isme batana hotta hai ki koon se database se connect hotta hai
    let collection = db.collection('products');
    //isme batana hotta hai ki koon se collection se database mai connect hotta hai
    let response = await collection.find({}).toArray();

    // let response = await collection.find({name:'rijak'}).toArray();
    //this is used to find anything from the collection that we want
    console.log(response)
    //this convert into structure format
} catch (error) {
    console.error(error);
  }
}
getdata(); 