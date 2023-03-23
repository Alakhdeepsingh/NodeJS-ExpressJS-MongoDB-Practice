const fs = require('fs');
// const app = require('./app')
// console.log(app);
// // { x: 10, y: 20 }

// console.log(app.x);
// console.log(app.y);
// // 10
// // 20
// console.log(app.z())
// console.log("10"); 
// fs.writeFileSync("hello.txt", "dry") 
// console.log(__dirname)
// console.log(__filename)

//we can also write using other function
const gs = require('fs').writeFileSync;
gs("xyz.txt","abc");