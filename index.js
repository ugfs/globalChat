const express = require('express')
const cors = require('cors')
const socket = require('socket.io')
const http = require('http')
const path = require('path')

const app = express()

const server = http.createServer(app)
const io = socket(server)
const chatBackup = [];

io.on('connection',(socket)=>{
	socket.on('send-msg',(data)=>{
		chatBackup.push(data)
		socket.broadcast.emit('send-msg',data)
	})
})

app.use(express.static('assets'))


app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname, '/pages/join.html'))
})

app.get('/user',(req,res)=>{
	res.sendFile(path.join(__dirname,'/pages/user.html'))
})

app.get('/fetchChats',(req,res)=>{
	res.json(chatBackup)
})


server.listen(3000,()=>{
	console.log('server is up')
})



