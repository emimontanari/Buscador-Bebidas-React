import {Modal, Image} from 'react-bootstrap'
import useBebidas from '../hooks/useBebidas'

const ModalBebida = () => {
    const {modal,handleModalClick} = useBebidas()
  
  return (
    <Modal show={modal} onHide={handleModalClick}>
        <Modal.Body>
            CUERPO DE MODAL
        </Modal.Body>
    </Modal>
  )
}

export default ModalBebida