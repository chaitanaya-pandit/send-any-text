module.exports=(io)=>{
    io.on("connection",(socket)=>{
        console.log("userconnected:",socket.id)

        socket.on("joinroom",(path,cb)=>{
            socket.join(path);
            console.log(`socket id:${socket.id} in this room ${path}`)
            cb("joined room")
        })

        socket.on("sendtext",({path,text})=>{
            io.to(path).emit("recievetext",text)
            console.log(`text:${text} send to room ${path}`)
        })

        socket.on("disconnect",(socket)=>{
            console.log("user disconnected:",socket.id)
        })
    })
}   