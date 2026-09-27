
import initialMessages  from "./message";
import { useState, useRef } from "react";
import './ChatBox.css'
import WriteChat from "./WriteChat";

function formatDate(dateStr){
    const date = new Date(dateStr)
    const weekday = date.toLocaleDateString('ko-KR',{weekday:'long'});
    return `${dateStr} ${weekday}`
}

function ChatBox(){
    const [messages, setMessages] = useState(initialMessages);

    const handleNewMessage = (text, sender, img) => {    // ← 여기서 정의됨
        const newMessage = {
          id: messages.length + 1,
          sender,
          text,
          img,
          date: new Date().toISOString().split('T')[0],
        };
        setMessages([...messages, newMessage]);         // ← 진짜로 메시지 추가하는 부분
      };

        const scrollRef = useRef(null);
  const isDragging = useRef(false);
  const startY = useRef(0);
  const startScrollTop = useRef(0);

    const handleMouseDown = (e) => {
        isDragging.current = true;
        startY.current = e.clientY;
        startScrollTop.current = scrollRef.current.scrollTop;
      };
    
    const handleMouseMove = (e) => {
        if (!isDragging.current) return;
        const delta = e.clientY - startY.current;
        scrollRef.current.scrollTop = startScrollTop.current - delta;
      };
    
    const handleMouseUp = () => {
        isDragging.current = false;
      };
    



    return(
        <div className="wrap">
            <div className="chat-box"
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}>
            {messages.map((msg, index)=>{

                    const prevMsg = messages[index - 1];
                    const isNewDate = !prevMsg || prevMsg.date !== msg.date;
                
                    
               return(
                <div key={msg.id}>
                     {isNewDate && (
                        <div className="date-divider">{formatDate(msg.date)}</div>
                     )}
                <div className={msg.sender === 'me' ? 'chat-me' : 'chat-other'}>
                <div className="chat-profile sender-toggle"><img src={msg.img} alt="프로필 이미지"/></div>
                    <div className={msg.sender === 'me' ? 'bubble bubble-me' : 'bubble bubble-other'}>{msg.text}</div>
                </div>
                
             </div>
               )
               })}
            </div>
            <WriteChat onSend={handleNewMessage} /> 
        </div>
    )
}

export default ChatBox
