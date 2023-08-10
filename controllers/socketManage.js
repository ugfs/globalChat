function socketManage(socket){
	
	socket.on('send-msg',(data)=>{
		socket.broadcast.emit('send-msg',data)
	})
}

module.exports = socketManage;