import styled from 'styled-components'
import Close from '../assets/close.svg'

const Overlay = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background: rgba(39,47,64,30%);

    display: flex;
    align-items: center;
    justify-content: center;   
`

const ModalBox = styled.div`
    background-color: white;
    padding: 15px 30px;
    width: 652px;
    border-radius: 20px;
    box-sizing: border-box;
    display: flex;
`

const CloseButton = styled.img`
    position: absolute;
    bottom: 53%;
    left: 70%;
    width: 35px;
`

export default function Modal({handleClose, show}){
    const showHideClassName = show ? "modal-display-block" : "modal-display-none" 

    return(
        <Overlay className={showHideClassName}>
            <ModalBox>
                <p>Employee successfully created !</p>
                <CloseButton src={Close} onClick={handleClose} alt="Close modal" />
            </ModalBox>
        </Overlay>
        
    )

}