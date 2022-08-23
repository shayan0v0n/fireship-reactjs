import { useState, useEffect } from 'react'
import { Modal, Form, FloatingLabel } from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { userAction } from '../../apiControl/actions'
import './LoginModal.scss'

const LoginModal = props => {
  const [ inputUserName, setInputUserName ] = useState('');
  const [ inputPassword, setInputPassword ] = useState('');
  const [ inputValidate, setInputValidate ] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(userAction())
  }, [])

  const userData = useSelector(state => state.user)
  
  
  
  const checkSubmitValidate = () => {
    if (inputUserName.trim() == '' || inputPassword.trim() == '') {
      setInputValidate(false)
    }else {
      setInputValidate(true)
    }
  }
  
  const inputUserNameHandler = (e) => {
    setInputUserName(e.target.value)
  }
  
  const inputPasswordHandler = (e) => {
    setInputPassword(e.target.value)
  }
  
  const submitLoginHandler = () => {
    const userInputs = {
      name: inputUserName,
      password: inputPassword,
      license: 'no license',
      0: []}
      
      
      if (userData.user !== null ) {
        const userDataKey = Object.keys(userData.user)
        const currentUser = userData.user[userDataKey[0]]
        if (currentUser.name !== userInputs.name) {
          axios.delete('https://fireship-6470a-default-rtdb.firebaseio.com/user.json')
          axios.post('https://fireship-6470a-default-rtdb.firebaseio.com/user.json', userInputs)
          localStorage.setItem('accountExist', JSON.stringify(userInputs));
          props.handleClose()
        }else {
          localStorage.setItem('accountExist', JSON.stringify(userInputs));
          props.handleClose()
        }
      }else {
        axios.post('https://fireship-6470a-default-rtdb.firebaseio.com/user.json', userInputs)
        localStorage.setItem('accountExist', JSON.stringify(userInputs));
        props.handleClose()
      }
  }
  

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
            <Form.Control type="text" placeholder="userName" value={inputUserName} onInput={(e) => {inputUserNameHandler(e); checkSubmitValidate()}} />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" value={inputPassword} onInput={(e) => {inputPasswordHandler(e); checkSubmitValidate()}} />
            </FloatingLabel>
            { inputValidate ? (<button className='w-100 mt-3 login-button' onClick={() => submitLoginHandler()}>Login</button>) : (<button className='w-100 mt-3 disabled-login' disabled>Login</button>) }
        </Modal.Body>
    </Modal>
  )
}

export default LoginModal