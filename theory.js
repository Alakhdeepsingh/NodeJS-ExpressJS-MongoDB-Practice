// 1)Jho bhi language database se connect kar paye vo server side language hotti hai 
// 2)JS, HTML,CSS etc kyho nhoi access kar patti hai database ko kyoki vo
// client side mai hotti hai server side mai nhi 
// 3)Server aur client ke through kesse connection hotta hai , api ke through connection hotta hai 
// 4)Jabh bhi webapp ko data chaiye hotta hai tho vo server se data requjest karta hai
// and phir server se data aata hai 
// 5)If we want to run the program then we will write node .\index.js ( node <filename> )
// 6) export import 
// 7) Core modules : global & non global
// 8) core modules vo hotte hai jho already existing hai 
// and hamm usse use kar rahe hai jesse ki console.log 
//global : vo hotte hai jho jisse import karne ki jarurat nhi hotti hai
//jesse ki console.log
//non global : vo hotte hai jisse import karne ki jarurat pardti hai
//jesse ki fs ko hamm import karte hai use karte time
//9) Server: How to create it check in server.js
//10) npm i for installing package.json
//11) if we want to install node modules then we will need to
//just write npm i <node-module> name
//12) Jho bhi mai node module install karuga vo automatically package.json ke andar dependecy ke andar chala jaega 
//13)Nodemon is used ki mtb barr barr servver naa start karna parega
// to install it npm nodemon -g 
//14)to use nodemon we write nodemon <filename>
//15) Middleware : we only use in routes
 //types of middleware : application level middleware, router-level, error handling, built in, third party
//we generally use to filter req and resp and also for checking authentication
//application middleware : ek specific group of route ke uppar nhi lagh sakta tha vo purri ki purri applications mai jitne bhi routes tha 
//route-level : ekk route ke uppar bhi lagh sakta hi , group of route ke uppar bhi lagh sakta hai aur sarre ke sarre rotes ke uppar bhi lagh sakta hai 


//16)MongoDB:
// MongoDB is a NoSQL database
// MySQL , SQL yehh structure walle hotte hai isliye yehh SQL mai aate hai
// and MongoDB unstructured mai hotta hai isliye yehh NoSQL mai aata hai
// The data stored in a collection
// Collection don't have row and columns
// Data is stored in the form of object



//commads of mongodb

// use youtube
// switched to db youtube
// show dbs
// Ecommerce  268.00 KiB
// admin       40.00 KiB
// alakh       80.00 KiB
// alakhdeep  384.00 KiB
// config      72.00 KiB
// local      112.00 KiB
// sample      40.00 KiB
// db.createCollection('videos')
// { ok: 1 }
// show dbs
// Ecommerce  268.00 KiB
// admin       40.00 KiB
// alakh       80.00 KiB
// alakhdeep  384.00 KiB
// config      72.00 KiB
// local      112.00 KiB
// sample      40.00 KiB
// youtube      8.00 KiB
// show collections
// videos
// db.createCollection('playlist')
// { ok: 1 }
// db.videos.drop()
// true
// show collections
// playlist
// db.dropDatabase()
// { ok: 1, dropped: 'youtube' }
// show dbs
// Ecommerce  268.00 KiB
// admin       40.00 KiB
// alakh       80.00 KiB
// alakhdeep  384.00 KiB
// config     108.00 KiB
// local      112.00 KiB
// sample      40.00 KiB


//crud
// use e-comm
// switched to db e-comm
// db.products.find()
// {
//   _id: ObjectId("647e8dd3359afa50b066c278"),
//   name: 'm 40',
//   brand: 'samsung',
//   price: 250,
//   category: 'mobiles'
// }
// {
//   _id: ObjectId("647e8e4b359afa50b066c279"),
//   name: 'm 40',
//   brand: 'samsung',
//   price: 250,
//   category: 'mobiles'
// }
// {
//   _id: ObjectId("647e8ebb53754314bc6b0cff"),
//   name: 'alakh',
//   brand: 'vivo',
//   price: '200',
//   category: 'mobile'
// }
// db.products.updateOne({name:"alakh"},{$set:{brand:"realme"}})
// {
//   acknowledged: true,
//   insertedId: null,
//   matchedCount: 1,
//   modifiedCount: 1,
//   upsertedCount: 0
// }
// db.products.deleteOne({brand:"samsung"})
// {
//   acknowledged: true,
//   deletedCount: 1
// }
// e-comm

