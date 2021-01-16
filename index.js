const express = require("express");
const app = express(); // xay nha
const port = process.env.PORT || 5000; // khai bao vao cong
app.listen(port,function (){
    console.log("sever is running...");
}); //hoan thanh
app.use(express.static("public"));//cac file css.image,....phai dat trong public

// tao routing (thue nv)
app.get("/",function (req,res){
    res.sendFile(__dirname+"/public/SS6.html");
})
// them 1 routing
app.get("/bongda",function (req,res){
    var d ={
        message:"success",
        data:[
            {
                id:1,
                name:"haha"
            },
            {
                id:2,
                name:"hihi"
            }
        ]
    }
    res.send("d");
})
app.get("/quan-ao",function (req,res){
    res.sendFile(__dirname+"/public/SS7.html")
})
app.get("/bai-tap-nhom",function (req,res){
    res.sendFile(__dirname+"/public/B1.html")
})