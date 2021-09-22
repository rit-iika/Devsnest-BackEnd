console.log("hiiii");
const express= require("express");
const app=express();


//CRUD-> post,get,put, delete

app.get('/',(req,res)=>{
    res.send("stringgg");
    
    /*{a:1}
    [1,2,3,3,]*/
 
})
//will show "hello" upon port/


app.listen(5000);

//this is GET methon(READ)
//port opened in localhost:5000




// app.post('/',(req,res)=>{
//     res.send("created");
// })
// app.put('/',(req,res)=>{
//     res.send("updated");
// })
// app.delete('/',(req,res)=>{
//     res.send("deleted");
// })
