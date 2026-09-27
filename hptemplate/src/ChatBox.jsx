import messages  from "./message";
import './ChatBox.css'

function ChatBox(){
    return(
        <div className="chat-box">
            {messages.map((msg)=>(
                
                <div key={msg.id} className={msg.sender === 'me' ? 'chat-me' : 'chat-other'}>
                    <div className="chat-profile"><img src={msg.img}/></div>
                    <div className={msg.sender === 'me' ? 'bubble bubble-me' : 'bubble bubble-other'}>{msg.text}</div>
                 </div>
            ))}
        </div>
    )
}

export default ChatBox
