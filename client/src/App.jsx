import React, { useEffect, useMemo, useState } from 'react'
import {io} from "socket.io-client";
const App = () => {
  const socket = useMemo(()=>io('http://localhost:3000'), []);
  const [message, setMessage] = useState('');

  useEffect(() => {
    socket.on("connect",()=>{
      console.log("user connected", socket.id);
    });
    socket.on("receive-message",(data)=>{
      console.log("message in client ", data);;
      
    })
      return () => {
        socket.emit("disconnect");
    };
    
  }, [socket]);



  const handleSubmit =(e)=>{
    e.preventDefault();
    socket.emit("send-message",message);
    setMessage('');
  }
  return (
    <div className='flex justify-center items-center flex-col'>
      <h1 className='text-2xl text-sky-500'>Chat kro</h1>
      <input
        type='text'
        className='border-2 border-sky-500 rounded-md p-2 m-2'
        placeholder='Type your message...'
        value={message}
        onChange={(e)=>{setMessage(e.target.value)}}
      />
      <button className='border p-2 bg-gray-400 cursor-pointer' type='submit' onClick={handleSubmit}>Submit </button>
    </div>

  )
}

export default App