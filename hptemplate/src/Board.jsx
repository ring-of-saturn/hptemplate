import BoardCard from './BoardCard'
import posts from './boardData.js'
import './Board.css'

function Board (){
    return(
        <div className='board'>
            {posts.map((post)=>(
                <BoardCard key={post.id} post={post}></BoardCard>
            ))}
        </div>
    )
}

export default Board
