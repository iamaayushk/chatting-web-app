import React,{lazy} from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
const Home = lazy(()=> import('./pages/Home'));
const Login = lazy(()=> import('./pages/Login'));
const Chat = lazy(()=> import('./pages/Chat'));
const Groups = lazy(()=> import('./pages/Groups'));
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/chat/:ChatId" element={<Chat/>} />
        <Route path="/groups" element={<Groups/>} />
      </Routes>
    </Router>
  )
}

export default App