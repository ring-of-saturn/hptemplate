import albumData from './albumData.js'
import './AlbumGal.css'


function AlbumGal(){
    return(
        <div className='album-wrap'>
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
export default AlbumGal;
