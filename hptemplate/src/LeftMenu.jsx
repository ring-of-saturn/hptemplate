import myProfile from './assets/profile.png'
import chat from './assets/i_chat.png'
import album from './assets/i_album.png'
import note from './assets/i_note.png'
import sheet from './assets/i_sheet.png'
import './LeftMenu.css'

function LeftMenu({onSelect}){
    return(
        <div className='left-wrap'>
            <div className='user-profile'><img src={myProfile} alt="사용자 프로필 사진" /></div>
            <div className='menu-btn'>
                <button onClick={() => onSelect('chat')}><img src={chat} alt="채팅 메뉴" /></button>
                <button onClick={() => onSelect('album')}><img src={album} alt="앨범" /></button>
                <button onClick={() => onSelect('note')}><img src={note} alt="노트" /></button>
                <a href="https://docs.google.com/spreadsheets/d/1FJouAfipQ6E5Zj5egcjA-EPvYf-BBYZbcu2o2F06gfs/edit?usp=sharing" target="_blank"><img src={sheet} alt="채팅 메뉴" /></a>
            </div>
        </div>
    )
}

export default LeftMenu;
