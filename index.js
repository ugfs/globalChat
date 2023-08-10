const express = require('express')
const cors = require('cors')
const socket = require('socket.io')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser')
const socketManage = require('./controllers/socketManage.js')

const app = express()
const server = http.createServer(app)
const io = socket(server)

io.on('connection',socketManage)
// app.use(bodyParser.json())


app.get('/',(req,res)=>{
	res.sendFile(path.join(__dirname, '/pages/join.html'))
})

app.get('/user',(req,res)=>{
	res.sendFile(path.join(__dirname,'/pages/user.html'))
})


server.listen(3000,()=>{
	console.log('server is up')
})



