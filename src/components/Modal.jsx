import styled from 'styled-components'
import Close from '../assets/close.svg'

const Overlay = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    z-index: 5;
    min-width: 100vw;
    height: 100vh;
    background: rgba(39,47,64,30%);

    display: flex;
    align-items: center;
    justify-content: center;   
`

const ModalBox = styled.div`
    position: relative;
    background-color: white;
    padding: 15px 30px;
    width: 652px;
    border-radius: 20px;
    box-sizing: border-box;
    display: flex;
`

const CloseButton = styled.img`
    position: absolute;
    bottom: 75%;
    left: 96%;
    width: 35px;
    cursor: pointer;
`

/**
 * Modal component for a Rect app
 * @param {function} handleClose Takes for value a function to close the modal (sets show to false)
 * @param {boolean} show Boolean to hide or show the modal
 * @returns JSX component
 */
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