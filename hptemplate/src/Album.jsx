import d7 from './assets/d7.jpg'
import AlbumGal from './AlbumGal'
import './Album.css'
import { useState } from 'react'
import pinIcon from './assets/i_pin.png'


function Album(){

    const [ order, setOrder ] = useState('latest')

    



    return(
        <div className='album-pin-box'>
            <div className='pin-title'><span><img src={pinIcon} alt="핀 아이콘" /></span>伏見稲荷大社</div>
            <div className='album-pin'><img src={d7} alt="고정 핀" /></div>
            <div className='album-filter'>
                <button className={`btn-latest ${order === 'latest' ? 'clicked' : ''}`}
                onClick={()=>setOrder('latest')} >LATEST</button>
                <button className={`btn-oldest ${order === 'oldest' ? 'clicked' : ''}`}
                onClick={()=>setOrder('oldest')}>OLDEST</button>
            </div>
            <AlbumGal/>
        </div>

    )
}

export default Album
