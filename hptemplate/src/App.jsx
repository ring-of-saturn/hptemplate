import { useState } from 'react'
import './App.css'
import Header from './Header'
import ProfileCard from './ProfileCard'
import ChatBox from './ChatBox'
import LeftMenu from './LeftMenu'
import Footer from './Footer'
import Album from './Album'

function App() {
  const [activeMenu, setActiveMenu] = useState('chat');
  
  const activeAlbum = () =>{
    setActiveMenu('album')
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
      </div>
      <Footer/>
    </div>
  )
}

export default App
