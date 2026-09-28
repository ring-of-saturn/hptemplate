import d7 from './assets/d7.jpg'
import AlbumPin from './AlbumPin'
import './Album.css'


function Album(){
    return(
        <div className='album-pin-box'>
            <div className='album-pin'><img src={d7} alt="고정 핀" /></div>
            <AlbumPin/>
        </div>

    )
}

export default Album
