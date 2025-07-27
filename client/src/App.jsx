import React, { useEffect } from 'react'
import { io } from 'socket.io-client';
const App = () => {

  const socket= io("http://localhost:3000");
  useEffect(() => {
    socket.on("connect",()=>{
      console.log("connected", socket.id);
      
    })
    socket.on("welcome",(s)=>{
      console.log(s);
      
    })
  }, []);
  return (
    <div className='flex justify-center items-center flex-col gap-5'>
      <h1 className='text-sky-400 text-center text-2xl font-bold'>Chatify</h1>
      <h3 className='text-sky-300 font-semibold'>Type your message</h3>

      <input
        type='text'
        className='border rounded-lg p-2 font-semibold '
        placeholder='enter your message'
      />
    </div>
  )
}

export default App;