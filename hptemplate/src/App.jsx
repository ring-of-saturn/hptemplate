import './App.css'
import Header from './Header'
import ProfileCard from './ProfileCard'
import ChatBox from './ChatBox'
import LeftMenu from './LeftMenu'
import Footer from './Footer'

function App() {
  return(
    <div className='wrapper'>
      <Header/>
      <div className="main-column">
        <LeftMenu/>
        <div className="main-row">
        <ProfileCard/>
        <ChatBox/>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default App
