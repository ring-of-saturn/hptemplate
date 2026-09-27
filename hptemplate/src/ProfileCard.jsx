import profileImg from './assets/chat_profile.jpg'
import './ProfileCard.css'

function profileCard(){
    return(
        <div>
            <div className='profile-card'>
                <div className='profile-img'><img src={profileImg} alt="프로필 이미지" /></div>
                <div className='chat-name'>대화상대</div>
                <div className='chat-memo'>03-052-32026</div>
            </div>

        </div>
    )
}

export default profileCard
