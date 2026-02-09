module.exports=(io)=>{
    io.on("connection",(socket)=>{
        console.log("userconnected:",socket.id)

        socket.on("joinroom",(path,cb)=>{
            socket.join(path);
            cb("joined room")
        })

        socket.on("sendtext",({path,text})=>{
            io.to(path).emit("recievetext",text)  
        })

        socket.on("disconnect",(socket)=>{
            console.log("user disconnected:",socket.id)
        })
    })
}   