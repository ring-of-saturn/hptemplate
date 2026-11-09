import './WriteModal.css'

function WriteModal({onClose}){
    return(
        <div className='modal-overlay'>
            <div className="modal-box">
                <form action="">
                    <div className="closed"><button className="modal-close-btn" onClick={onClose}>×</button></div>
                    <div className="top-btn">
                        <select name="category" id="category">
                            <option value="chat">CHAT</option>
                            <option value="gallery">GALLERY</option>
                            <option value="board">BOARD</option>
                        </select>
                        <div className="load-save">
                            <button className="load">불러오기</button>
                            <button className="save">임시저장</button>
                        </div>
                    </div>
                    <div className="sub-title"><input type="text" maxlength="10" placeholder='소제목을 입력해주세요' /></div>
                    <div className="title"><input type="text" maxlength="20" placeholder='제목을 입력해주세요' /></div>
                    <div className="styler"></div>
                    <div className="contents">
                        <textarea name="" id=""></textarea>

                    </div>
                    <button className='making-btn' type='submit'>LET'S BAKE</button>
                </form>
            </div>
        </div>
    )
}

export default WriteModal;
