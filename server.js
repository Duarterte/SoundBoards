const express = require('express')
const app = express()

app.use("/static",express.static(__dirname+'/public/static/'));

const handlePaths = (req, res, next) =>{
    if(req.url != "/pilloBoard") {
        res.redirect("/pilloBoard")
    }
    next();
}

app.use(handlePaths)

app.get("/pilloBoard", (req, res)=>{
    res.sendFile(__dirname+"/public/pilloboard.html")
})

app.listen(3000,()=>{
    console.log("http://localhost:3000/")
})