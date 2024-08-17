const express = require('express')
const socket = require('socket.io')
const fs = require('fs')
const http = require('http')

const app = express()
const server = http.createServer(app)
const io = socket(server)



app.use('/', express.static('./static')) // 상대경로 

app.get('/', function(request, response){
    fs.readFile('./static/name.html', function(err,data){
        if(err){
            response.send('error')
        }
        else{
            response.writeHead(200,{'Content-Type': 'text/html'})
            response.write(data)
            response.end() //write와 함께 씀
        }
    })
})

io.sockets.on('connection', function(socket){
    console.log('user connected')

    socket.on('newUser', function(name){
        socket.name = name
        console.log(socket.name+' joined the chat')
        io.emit('recieve', {name:'SERVER', message:socket.name + ' joined the chat!'})
    })

    socket.on('send', function(data){
        data.name = socket.name
        io.emit('recieve',{name:data.name, message:data.message})
    })

    socket.on('disconnect', function(data){
        // console.log('disconnected')
    })
})

server.listen(5500,function(){
    console.log("running server...")
})