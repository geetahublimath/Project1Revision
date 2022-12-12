
const express=require("express")
const bodyParser=require("body-parser")
const mongoose=require("mongoose")
const route=require("./routes/route")
const { urlencoded } = require("body-parser")
const app=express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

mongoose.connect("mongodb+srv://DeeptirthaMukherjee:QYKI3k8QSKC4I7FZ@cluster1.khatgm1.mongodb.net/project1-db?retryWrites=true&w=majority",{
    useNewUrlParser:true
     })

     .then(()=>console.log("Mongodb is connected"))
     .catch((err)=>console.log(err.msg))

     app.use("/",route)

     app.listen(process.env.PORT||3000,function(){
        console.log("Express running at port"+(process.env.PORT||3000))
     })


