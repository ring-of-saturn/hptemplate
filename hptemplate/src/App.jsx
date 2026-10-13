import { useState } from 'react'
import './App.css'
import Header from './Header'
import ProfileCard from './ProfileCard'
import ChatBox from './ChatBox'
import LeftMenu from './LeftMenu'
import Footer from './Footer'
import Album from './Album'
import BoardCard from './BoardCard'
import posts from './boardData.js'

function App() {
  const [activeMenu, setActiveMenu] = useState('chat');
  
  const activeAlbum = () =>{
    setActiveMenu('album')
  }

  const activeBoard = () =>{
    setActiveMenu('note')
  }


  return(
    <div className='wrapper'>
      <Header/>
      <div className="main-column">
        <LeftMenu onSelect={setActiveMenu}/>
        {activeMenu === 'chat' && (
                  <div className="main-row">
                  <ProfileCard/>
                  <ChatBox/>
                  </div>
        )}
        {activeMenu === 'album' &&(
            <Album/>
        )}
        {activeMenu === 'note' &&(
            <BoardCard post={posts[0]}/>
        )}
      </div>
      <Footer/>
    </div>
  )
}

export default App
