import { Modal, Button, Form, FloatingLabel } from 'react-bootstrap'
import './LoginModal.scss'

const LoginModal = props => {
  return (
    <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static"
        
    >
        <Modal.Header closeButton>
        <Modal.Title>Simple Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel
            controlId="floatingInput"
            label="userName"
            className="mb-3">
            <Form.Control type="text" placeholder="userName" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
            </FloatingLabel>
            <button className='w-100 mt-3 login-button'>Login</button>
        </Modal.Body>
    </Modal>
  )
}

export default LoginModal