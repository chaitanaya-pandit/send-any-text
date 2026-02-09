import React from "react";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {  FiSend } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { useState,useEffect } from "react";
import {socket} from "./Socket"
const Reciever:React.FC= () => {
  const navigate=useNavigate();

  const [path,setpath]=useState<string>("")
  const [text,settext]=useState<string>("")

  useEffect(()=>{
    socket.on("recievetext",(msg:string)=>{
      settext(msg)
      console.log(msg)
    })
    return ()=>{
      socket.off("recievetext");
    }
  },[])



  const joinroom=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!path) return alert("please enter path")
    socket.emit("joinroom",path,()=>{
      console.log("joined room")
    })
    
  }


  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-300 to-blue-400 flex justify-center">
      <div className="w-full lg:max-w-4xl lg:min-h-screen">
        <motion.header
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="m-2 rounded-2xl 
            backdrop-blur-xl bg-white/30 border border-white/40 
            shadow-xl flex justify-center"
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl p-4 font-semibold tracking-wide text-blue-900">
            Recieve Text
          </h1>
        </motion.header>

        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="m-2 rounded-2xl 
            backdrop-blur-xl bg-white/30 border border-white/40 
            shadow-xl min-h-[78vh]"
        >
          <form onSubmit={joinroom}
          className="flex flex-col gap-4 p-4 lg:gap-6 lg:p-6">
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="flex flex-col gap-1"
            >
              <span className="text-lg font-medium text-blue-900">
                Write address
              </span>
              <input
                type="text"
                name="address"
                value={path}
                onChange={(e)=>setpath(e.target.value)}
                placeholder="https://example.com"
                className="outline-none p-3 w-full lg:w-[80%] mx-auto rounded-xl 
                                  bg-white/60 border border-white/60 
                                  focus:ring-2 focus:ring-blue-300 transition"
              />
            </motion.div>
            <motion.button
            type="submit"
                          whileTap={{ scale: 0.95 }}
                          whileHover={{ scale: 1.03 }}
                          className="mt-2 w-full lg:w-1/2 mx-auto 
                            rounded-xl py-3 font-semibold 
                            text-white bg-blue-600/90 
                            shadow-lg hover:bg-blue-700 transition"
                        >
                          search text
                        </motion.button>
          </form>

            <div className="p-4 w-full lg:w-[80%] mx-auto rounded-xl bg-white/60 border border-white/60 h-64 overflow-y-auto">
            {text ? (
              <p className="text-gray-800 whitespace-pre-wrap">{text}</p>
            ) : (
              <p className="text-gray-500 text-center">No text received yet</p>
            )}
          </div>


          <div className="flex gap-4 mt-5">
                              
                            
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/")}
                                className="flex-1 cursor-pointer rounded-xl p-4 bg-white/40 border border-white/50 flex flex-col items-center justify-center shadow-md"
                              >
                                <GoHome className="text-4xl text-blue-700 mb-2" />
                                <span className="text-lg font-medium text-gray-800">
                                  Home
                                </span>
                              </motion.div>
                    
                              
                              <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => navigate("/sender")}
                                className="flex-1 cursor-pointer rounded-xl p-4 bg-white/40 border border-white/50 flex flex-col items-center justify-center shadow-md"
                              >
                                <FiSend className="text-4xl text-green-700 mb-2" />
                                <span className="text-lg font-medium text-gray-800">
                                  Sender
                                </span>
                              </motion.div>
                    
                            </div>
          

          
        </motion.main>
        <motion.footer
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="m-2 rounded-2xl 
                    backdrop-blur-xl bg-white/30 border border-white/40 
                    shadow-xl p-3 lg:p-4"
        >
          <div className="text-blue-900 text-center text-sm">
            ONLY FOR DEVELOPER PRACTICE PURPOSE
          </div>

          <div className="flex justify-center mt-2">
            <motion.div whileHover={{ scale: 1.2 }}> 
              <a href="http://">
            <CiInstagram className="w-9 h-9 m-2 text-blue-900 cursor-pointer" />
            </a>
        
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <a href="http://">
              <CiTwitter className="w-9 h-9 m-2 text-blue-900 cursor-pointer" />
              </a>
            </motion.div>
          </div>
        </motion.footer>
      </div>
    </div>
  );
};

export default Reciever;
