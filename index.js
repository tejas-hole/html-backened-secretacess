
import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));
 const app=express();
const port=3000;
var userIsAuthorised=false;

app.use(bodyParser.urlencoded({extended:true}));
function passwordcheck(res,req,next){
    const password=req.body["password"];
    if( password === "Tejas"){
        userIsAuthorised=true;
    }
next();
}
app.use(passwordcheck);

app.get("/",(req,res)=>{
    res.sendFile(__dirname + "/public/index.html");
}); 

app.post("/submit",(req,res)=>{
if(userIsAuthorised){
    res.sendFile(__dirname + "/public/secret.html");
} else {
    res.sendFile(__dirname + "/public/index.html");

}
});

 app.listen(port,()=>{
    console.log(`listning on ${port}`);
 });
