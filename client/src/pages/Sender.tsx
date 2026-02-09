import React from "react";
import { CiInstagram, CiTwitter } from "react-icons/ci";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiInbox } from "react-icons/fi";
import { GoHome } from "react-icons/go";
import { useState } from "react";
import {socket} from "./Socket"


const Sender: React.FC = () => {
  const navigate=useNavigate()

  const [path,setpath]=useState<string>("")
    const [text,settext]=useState<string>("")
  
    const submit=(e:React.FormEvent<HTMLFormElement>)=>{
     try {
       if(!path && !text) return alert("please fill all feilds")
   e.preventDefault()

   socket.emit("joinroom",path,()=>{
    socket.emit("sendtext",{path,text})
   })
      
     } catch (error) {
      console.log(error)
     }
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
            Send Text
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
          <form 
          onSubmit={submit}
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

            
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="flex flex-col gap-1"
            >
              <span className="text-lg font-medium text-blue-900">
                Write the text you want to show
              </span>
              <textarea
                name="text"
                value={text}
                onChange={(e)=>settext(e.target.value)}
                placeholder="Type your message here..."
                className="h-40 resize-none w-full lg:w-[80%] mx-auto 
                  outline-none p-3 rounded-xl 
                  bg-white/60 border border-white/60 
                  focus:ring-2 focus:ring-blue-300 transition"
              />
            </motion.div>

            
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.03 }}
              type="submit"
              className="mt-2 w-full lg:w-1/2 mx-auto 
                rounded-xl py-3 font-semibold 
                text-white bg-blue-600/90 
                shadow-lg hover:bg-blue-700 transition"
            >
              Send
            </motion.button>
          </form>

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
                      onClick={() => navigate("/receiver")}
                      className="flex-1 cursor-pointer rounded-xl p-4 bg-white/40 border border-white/50 flex flex-col items-center justify-center shadow-md"
                    >
                      <FiInbox className="text-4xl text-green-700 mb-2" />
                      <span className="text-lg font-medium text-gray-800">
                        Receiver
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
              <CiInstagram className="w-9 h-9 m-2 text-blue-900 cursor-pointer" />
            </motion.div>
            <motion.div whileHover={{ scale: 1.2 }}>
              <CiTwitter className="w-9 h-9 m-2 text-blue-900 cursor-pointer" />
            </motion.div>
          </div>
        </motion.footer>

      </div>
    </div>
  );
};

export default Sender;
