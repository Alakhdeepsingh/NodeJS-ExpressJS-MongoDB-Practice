const express = require('express'); 
const path = require('path')
const app = express();
const route = express.Router();
route.use(reqFilter)
// app.get('',(req,res)=>{
//     // res.send('hello');
//     //send is the method

//     // console.log("hey",req.query.name)
//     //jesse maine route mai likha http://localhost:5000/?name=anil
//     //tho kya hua ki req.query ne route mai jho likha tha vo yeeh dhe detta hai 
//     // hey { name: 'anil' }

//     //we can send this in page also in resp
//     res.send('hello' + req.query.name);
// });

// app.get('/about',(req,res)=>{
//     res.send('Hello world')
// });
// //req mtb essa jaruri nhi ki harr barr dono parameter use hii honne chaiye
// //abh jesse keval resp ka use kar rahe hai tho data arraha hai
// //req jabh client kuch karega tabh usse use karenge 
// app.get('/help',(req,res)=>{
//     res.send('jayesh')
// });
// app.listen(5000);
//get is the method which provide routes that can be get, post, put, delete etc.




// console.log(__dirname)
// const publicPath = path.join(__dirname,'public')
// // console.log(publicPath);

// app.set('view engine','ejs');

// app.use(express.static(publicPath))
// //  use is the function of expressjs 

// app.get('',(_,resp)=>{
//     resp.sendFile(`${publicPath}/home.html`)
// })

// app.get('/about',(_,resp)=>{
//     resp.sendFile(`${publicPath}/about.html`)
// })

// app.get('*',(_,resp)=>{
//     resp.sendFile(`${publicPath}/nopage.html`)
// })

// app.get('/profile',(_,resp)=>{
//     resp.sendFile('profile')
// })
// app.listen(5000);




//ejs is used for template engine
//used for sending data dynamically

// app.get('/profile', (_, resp) => {
//     const user = {
//       name: 'alakhdeep',
//       email: 'alakhdeep@gmail.com'
//     };
//     resp.render('profile',  user );
//   });
  

// app.listen(5000);





//render html in nodejs
// const express = require('express'); 
// const app = express();

// app.get('',(req,res)=>{
//     res.send(`
//     <h1>Welcome, to Home Page</h1><a href="/about">Go to about page`)
// });

// app.get("/about",(req,res)=>{
//     res.send(`
//     <input type="text" placeholder="User name" />
//     <button>Click me</button>
//     <a href="/">Go to home page</a>
//     `)
// });
// app.listen(5000);


//middleware
const reqFilter = (req,resp,next)=>{
  if(!req.query.age){
    resp.send("please provide age");
  }
  // console.log('reqFilter')
  else if(req.query.age<18){
    resp.send("you cannot access this page without")
  }
  else{
    next();
  }
}
// app.use(reqFilter)
app.get('',(_,resp)=>{
    resp.send(`Welcome my friend`)
})
app.get('/users',(_,resp)=>{
  resp.send(`ram`)
})
app.get('/about',(_,resp)=>{
  resp.send(`rajesh`)
})
//agar kisi ekk mai restriction lagana hai tho phir
//app.use(reqFilter) hatta kar kisi ekk mai req.Filter lagga dho
// app.get('/home',reqFilter,(_,resp)=>{
//   resp.send(`raj`)
// })



//abh yehh reqFilter agar 50-100 routes mai lagana hogha tho kesse laganege
//tho hamm routed middleware ka export karna hogha
// const route = express.Router();

//abh jinn jinn route ke uppar mujhe middleware apply karna hai 
// uspar mai route.get likhuga app.get ki bajaye 

route.get('/home',(_,resp)=>{
  resp.send(`raj`)
})
app.use('/',route)
app.listen(5000);
