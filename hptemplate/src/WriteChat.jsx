import { useState } from "react";
import meImg from '/src/assets/profile.png'
import otherImg from '/src/assets/chat_profile.jpg'
import './WriteChat.css'

function WriteChat({ onSend }) {
    const [inputText, setInputText] = useState('');
    const [activeSender, setActiveSender] = useState('me');
  
    const toggleSender = () => {
      setActiveSender(activeSender === 'me' ? 'other' : 'me');
    };
  
    const handleSend = () => {
      if (inputText.trim() === '') return;
      const senderImg = activeSender === 'me' ? meImg : otherImg;
      onSend(inputText, activeSender, senderImg);  // ← 부모한테 "이 내용, 이 발신자로 보내줘!" 요청
      setInputText('');
    };
  
    return (
      <div className="chat-input">
        <img src={activeSender === 'me' ? meImg : otherImg} onClick={toggleSender} className="sender-toggle" alt="전환" />
        <textarea
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="이곳에 내용을 입력한다."
          />
          <button onClick={handleSend}>SEND</button>
      </div>
    );
  }
  
  export default WriteChat;
