// module.exports={
//     x:10,
//     y:20,
//     z: function(){
//         return 10;
//     }
// }

// const colors = require('colors');
// //abh yehh color use karna hai naa tho color import karna pardha hamhe tho yehh non global hua 
// console.log("hellooo".red); 

// const http = require('http');
// http.createServer((req,resp)=>{
// resp.writeHead(200,{'Contend-Type':'application\json'});
// resp.write(JSON.stringify({name:'Alakhdeep', email:'alak@gmail.com'}))
// //resp ka use kar rahe hai mtb ki hammdata ko hmm send kar rahe hai 
// resp.end();
// }).listen(4000);

// console.log(process.argv)
// [
//     'C:\\Program Files\\nodejs\\node.exe',     
//     'D:\\GITHUB\\Github Repositeries\\NodeJS-ExpressJS-MongoDB-Practice\\app.js',
//     'hello',
//     'hii'
//   ]

//first two inputs are fixed 
// and if I write any thing  with command then it will coing to come in an array for example I have written node app.js hello hii

// console.log(process.argv[2]);
// hello

// const fs = require('fs');

// const input = process.argv;
// fs.writeFileSync(input[2],input[3])
// used this command
// nodemon app.js apple.txt 'alakhdeepsingh'
//creating file using terminal


//if we want to delete and add files using command
// const input = process.argv;
// In Node.js, process.argv is a property that provides access to the command-line arguments passed when starting the Node.js process.
// When you run a Node.js script from the command line, you can pass arguments to the script. For example:
// node script.js arg1 arg2 arg3

// if(input[2]=='add'){
//     fs.writeFileSync(input[3],input[4])
// } 
// else if(input[2]=='remove'){
//     fs.unlinkSync(input[3])
// }
// else{
//     console.log("invalid input");
// }
// node app.js add data.txt 'world is beautiful'
// //using this command in termianl file has been added 
// node app.js remove data.txt 'world is beautiful'
// using this command file has been reoved 
// node app.js aa data.txt 'world is beautiful' 
// using this command out comes invalid input

//creating files in loop
// const path = require('path');
// const dirPath = path.join(__dirname,'files');
// for(i=0; i<5; i++){
//     fs.writeFileSync(dirPath+"/hello"+i+".txt", "jayesh bhai ")
//     // fs.writeFileSync("jayesh"${i}+".txt", "jayesh ki jai hoo")
//     // we can any to create files
// }
// console.log(__dirname)
// D:\GITHUB\Github Repositeries\NodeJS-ExpressJS-MongoDB-Practice

// fs.readdir(dirPath,(err,files)=>{
//     console.log(files)
//     [
//         'hello0.txt',
//         'hello1.txt',
//         'hello2.txt',
//         'hello3.txt',
//         'hello4.txt'
//     ]
// })

//if we want to print each files (not in array)
// fs.readdir(dirPath,(err,file)=>{
//     files.forEach((item)=>{
//         console.log("file name is", item)
//     })
// })


//crud operations 
// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;

// fs.writeFileSync(filePath,'Hello world');

// fs.readFile(filePath,'utf8',(err,item)=>{
//     if(!err) {
//         console.log(item);
//     }
// });

// fs.appendFile(filePath,'and file name is appl.txt',(err)=>{
//     if(!err){
//         console.log("file is updated")
//     }
// })


// fs.rename(filePath,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("file name is updated ")
// });]


//delete
// fs.unlinkSync(`${dirPath}/fruit.txt`);
//this deleted the file name fruit.txt which was under crud 

//asynchronous & synchronous
//in sync operations tasks are performed one at a time
//in async, second task do not wait to finish first task
// console.log("start exe...")

// setTimeout(()=>{
//     console.log("logic exe")
// },5000)

// console.log("complete exe")


// let a = 10;
// let b = 0;

// setTimeout(()=>{
//     b = 30;
// },2000)
// console.log(a+b);
//10

// let a = 10;
// let b = 0;

// let waitingData = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//     resolve(30);
// },2000)
// })

// waitingData.then((data)=>{
//  b=data;
//  console.log(a+b);
//40
// })














