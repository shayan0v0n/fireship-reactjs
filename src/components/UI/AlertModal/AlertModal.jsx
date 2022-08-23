import { Button, Modal } from 'react-bootstrap'

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
          <Button className='col btn-success' onClick={() => props.exit()}>Yes</Button>
          <Button className='col btn-danger' onClick={() => props.onHide()}>No</Button>
        </Modal.Footer>
      ) : (
        null
      ) }
    </Modal>
  )
}

export default AlertModal