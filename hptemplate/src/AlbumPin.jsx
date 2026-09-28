import albumData from './albumData.js'
import './AlbumPin.css'


function AlbumPin(){
    return(
        <div className='album-wrap'>
            <div className='best-pin'>대빵</div>
            <div className='album-box'>
            {albumData.map(photos =>{
            return(
                <div className='album-blank'>
                    <img className='album-img' src={photos.img} alt="갤러리 이미지" />
                </div>
            )
            })}
            </div>
        </div>
    )
}
export default AlbumPin;
