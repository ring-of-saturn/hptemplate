import messages  from "./message";
import './ChatBox.css'

function formatDate(dateStr){
    const date = new Date(dateStr)
    const weekday = date.toLocaleDateString('ko-KR',{weekday:'long'});
    return `${dateStr} ${weekday}`
}

function ChatBox(){
    return(
        <div className="chat-box">
            {messages.map((msg, index)=>{

                    const prevMsg = messages[index - 1];
                    const isNewDate = !prevMsg || prevMsg.date !== msg.date;
                
                    
               return(
                <div key={msg.id}>
                     {isNewDate && (
                        <div className="date-divider">{formatDate(msg.date)}</div>
                     )}
                <div className={msg.sender === 'me' ? 'chat-me' : 'chat-other'}>
                <div className="chat-profile"><img src={msg.img}/></div>
                    <div className={msg.sender === 'me' ? 'bubble bubble-me' : 'bubble bubble-other'}>{msg.text}</div>
                </div>
                
             </div>
               )
})}
        </div>
    )
}

export default ChatBox
