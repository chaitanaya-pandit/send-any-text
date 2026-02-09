import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiSend, FiInbox } from "react-icons/fi";

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 to-blue-400">
      
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="backdrop-blur-xl bg-white/30 border border-white/40 rounded-2xl p-6 w-[90%] max-w-md shadow-xl"
      >
        
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Choose who you are
        </h2>

        <div className="flex gap-4">
          
        
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/sender")}
            className="flex-1 cursor-pointer rounded-xl p-4 bg-white/40 border border-white/50 flex flex-col items-center justify-center shadow-md"
          >
            <FiSend className="text-4xl text-blue-700 mb-2" />
            <span className="text-lg font-medium text-gray-800">
              Sender
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
      </motion.div>
    </div>
  );
};

export default Home;
