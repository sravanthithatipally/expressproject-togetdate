const express=require("express");
const app=express();


app.get("/",(request,response)=>{
    const date=new Date();
   response.send(`today's date is ${date}`);
});

app.get("/page",(request,response)=>{
    response.sendFile("./page.html",{root:__dirname});
});

app.get("/api/blog-stats",(request,response)=>{

})

app.listen(3045,()=>{
    console.log("server running successfully at http://localhost:3045");
});


