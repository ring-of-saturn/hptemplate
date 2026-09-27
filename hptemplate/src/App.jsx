import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import ProfileCard from './ProfileCard'
import ChatBox from './ChatBox'

function App() {
  return(
    <div>
      <Header/>
      <ProfileCard/>
      <ChatBox/>
    </div>
  )
}

export default App
