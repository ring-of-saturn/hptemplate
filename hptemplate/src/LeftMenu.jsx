import myProfile from './assets/profile.png'
import chat from './assets/i_chat.png'
import album from './assets/i_album.png'
import note from './assets/i_note.png'
import sheet from './assets/i_sheet.png'
import './LeftMenu.css'

function LeftMenu(){
    return(
        <div className='left-wrap'>
            <div className='user-profile'><img src={myProfile} alt="사용자 프로필 사진" /></div>
            <div className='menu-btn'>
                <button><img src={chat} alt="채팅 메뉴" /></button>
                <button><img src={album} alt="채팅 메뉴" /></button>
                <button><img src={note} alt="채팅 메뉴" /></button>
                <button><img src={sheet} alt="채팅 메뉴" /></button>
            </div>
        </div>
    )
}

export default LeftMenu;
