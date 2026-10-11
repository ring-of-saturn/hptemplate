import albumData from './albumData.js'
import './AlbumGal.css'
import {useState, useRef} from 'react';

function AlbumGal(){

    const [page, setPage] = useState(0);
    const totalPages = Math.ceil(18 / 6); 

    const startX = useRef(0);

    const pages = [];
    for(let i = 0; i < albumData.length; i+=6){
        pages.push(albumData.slice(i,i+6));
    }


    return(
        <div className='album-wrap'
            onPointerDown={(e)=> {startX.current = e.clientX}}
            onPointerUp={(e)=>{const diff = e.clientX - startX.current;
                if (diff < -50 && page < totalPages - 1) {
                    setPage(page + 1);
                } else if (diff > 50 && page > 0) {
                    setPage(page - 1);
                }
            }}
            onPointerCancel={() => console.log('취소됨')}>
            <div className='album-box'>
            {pages.map((pagePhotos,index) =>{
            return(
                <div className="album-page" key={index}>
                    {pagePhotos.map(photos=>{
                        return(
                            <div className='album-blank'>
                            <img className='album-img' src={photos.img} alt="갤러리 이미지" draggable="false"/>
                        </div>
                        )
                    })}
                </div>
            )
            })}
            </div>
        </div>
    )
}
export default AlbumGal;
