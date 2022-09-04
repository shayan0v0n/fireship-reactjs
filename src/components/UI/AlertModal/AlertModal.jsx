import { Button, Modal } from 'react-bootstrap'
import './AlertModal.scss'

const AlertModal = props => {
  return (
    <Modal
      show={props.show}
      onHide={props.onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='text-center'>
        {props.children}
      </Modal.Body>
      { props.exit ? (
        <Modal.Footer className='row'>
          <button className='col exitBtns' onClick={() => props.exit()}>Yes</button>
          <button className='col exitBtns' onClick={() => props.onHide()}>No</button>
        </Modal.Footer>
      ) : (
        null
      ) }
    </Modal>
  )
}

export default AlertModal