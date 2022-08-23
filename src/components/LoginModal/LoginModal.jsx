import { useState } from 'react'
import { Modal, Form, FloatingLabel } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './LoginModal.scss'
import AlertModal from '../UI/AlertModal/AlertModal'

const LoginModal = props => {
  const [ inputUserName, setInputUserName ] = useState('');
  const [ inputPassword, setInputPassword ] = useState('');
  const [ inputValidate, setInputValidate ] = useState(false);
  const [loginAlert, setLoginAlert] = useState(false);
  const inputUserNameHandler = (e) => setInputUserName(e.target.value)
  const inputPasswordHandler = (e) => setInputPassword(e.target.value)
  const navigate = useNavigate()
  
  const checkSubmitValidate = () => {
    if (inputUserName.trim() == '' || inputPassword.trim() == '') {
      setInputValidate(false)
    }else {
      setInputValidate(true)
    }
  }
  
  const submitLoginHandler = () => {
    const userInputs = {
      name: inputUserName,
      password: inputPassword,
      license: 'no license',
      0: [],
      1: []}
      
      localStorage.setItem('accountExist', JSON.stringify(userInputs));
      props.handleClose()
      setLoginAlert(true)
      navigate('/dashboard')
  }
  
  return (
    <>
    <AlertModal show={loginAlert} onHide={() => {setLoginAlert(false)}} modalTitle="Logged In🔥">
      <img src='/assets/gifs/success.gif' className='w-50' />
      <h2>You're Successfully Logged In...😃❤️</h2>
      <h3>I Hope Enjoy It...</h3>
    </AlertModal>
    <Modal
        show={props.show}
        onHide={props.handleClose}
        backdrop="static">
        <Modal.Header closeButton>
        <Modal.Title>Simple Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel
            controlId="floatingInput"
            label="userName"
            className="mb-3">
            <Form.Control type="text" placeholder="userName" value={inputUserName} onInput={(e) => {inputUserNameHandler(e); checkSubmitValidate()}} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" value={inputPassword} onInput={(e) => {inputPasswordHandler(e); checkSubmitValidate()}} />
            </FloatingLabel>
            { inputValidate ? (<button className='w-100 mt-3 login-button' onClick={() => submitLoginHandler()}>Login</button>) : (<button className='w-100 mt-3 disabled-login' disabled>Login</button>) }
        </Modal.Body>
    </Modal>
    </>
  )
}

export default LoginModal