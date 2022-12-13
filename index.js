const http = require("http")

const fs = require("fs")

let resData
fs.readFile("index.html", "utf-8",(error,data)=>{
    if(error){
        console.log(error)
    }
    else{
        // console.log(data)
        resData = data
    }
})


const server = http.createServer((req,res)=>{
    res.writeHead(200,{"content-type":"text/html"})
    res.write(resData)
    res.end()
})

server.listen(8000,()=>{console.log("server is up at port number 8000")})

