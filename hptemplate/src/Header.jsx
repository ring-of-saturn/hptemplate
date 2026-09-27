// 2026-09-27 오늘의 목표 : 헤더 바 컴포넌트로 만들기.
// 컴포넌트란? 재사용 가능한 화면 조각이다.

import {useState, useRef} from 'react';
import './Header.css';
import writeIcon from './assets/i_write.png';
import settingIcon from './assets/i_setting.png';
import playingIcon from './assets/i_playing.svg';
import pauseIcon from './assets/i_pause.svg';
import preIcon from './assets/i_pre.svg';
import nextIcon from './assets/i_next.svg';
import profileIcon from './assets/profile.png';
import firstStep from './assets/FirstStep.mp3'

// 이미지 등 외부 소스를 사용하려면 경로를 제대로 입력해 가져와 이름을 붙여줘야 한다.

function Header() {

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const togglePlay = () => {
        if(isPlaying){
            audioRef.current.pause();
        }
        else{
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }



    return(
        <div className="header">
            <div className="player">
                <span>Interstella ost - First Step</span>
                <div className="player-btn">
                    <button><img src={preIcon} alt="이전 곡 재생" /></button>
                    <button onClick={togglePlay}>
                        <img src={isPlaying? pauseIcon :playingIcon} alt="재생" />
                        <audio ref={audioRef} src={firstStep} loop></audio>
                    </button>
                    <button><img src={nextIcon} alt="다음 곡 재생" /></button>
                </div>
            </div>
            <div className='header-icons'>
                <button><img className='menu' src={writeIcon}></img></button>
                 {/* 중괄호를 쓴 것은 jsx 안에서 이건 그냥 텍스트가 아니라 자바스크립트 변수라는 것을 알려주는 표시. import로 가져온 이미지 경로가 담긴 것을 그대로 넣어주는 것. */}
                <button><img className='menu' src={settingIcon}></img></button>
                <button><img className='profile' src={profileIcon}></img></button>
            </div>
        </div>
    )
}

// 위의 내용이 하나의 컴포넌트이다. function 함수명() 안에 return으로 감싼 부분이 실제로 화면에 그릴 내용이 된다. 이렇게 HTML처럼 생긴 문법을 JSX라고 부른다. (자바스크립트 안에서 HTML을 쓸 수 있게 해주는 문법)

export default Header;
