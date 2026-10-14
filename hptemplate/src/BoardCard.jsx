import './boardData.js'
import './boardCard.css'

function BoardCard ({post}){

    return(
        <div>
            <div className="board-card">
                <div className="board-wrap">
                    <div className="board-text">
                        <p className="board-label">{post.label}</p>
                        <p className="board-title">{post.title}</p>
                        <p className="board-body">{post.text}</p>
                    </div>
                    <div className="board-img">
                    <img src={post.img}></img>
                </div>
                </div>
               
            </div>
        </div>
    )
}
export default BoardCard;
