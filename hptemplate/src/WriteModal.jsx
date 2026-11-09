import './WriteModal.css'

function WriteModal({onClose}){
    return(
        <div className='modal-overlay'>
            <div className="modal-box">
                <button onClick={onClose}>닫기</button>
            </div>
        </div>
    )
}

export default WriteModal;
