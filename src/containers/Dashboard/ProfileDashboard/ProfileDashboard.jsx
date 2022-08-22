import { useState } from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import useDarkMode from '../../../hooks/useDarkMode'
import DashboardOffcanvas from '../../../components/DashboardOffcanvas/DashboardOffcanvas'
import './ProfileDashboard.scss'

const ProfileDashboard = () => {
  const currentValue = JSON.parse(localStorage.getItem("accountExist"))
  const [theme] = useDarkMode()
  const navigate = useNavigate()
  const [show, setShow] = useState(true);
  const [ currentName, setCurrentName ] = useState(currentValue.name)
  const [ currentPassword, setCurrentPassword ] = useState(currentValue.password)
  const [ currentNameValidate, setCurrentNameValidate ] = useState(true);
  const [ currentPassValidate, setCurrentPassValidate ] = useState(true);
  const [ formValidate, setFormValidate ] = useState(false);

  const currentNameHandler = e => {
    setCurrentName(e.target.value)
    currentName.trim().length <= 8 ? setCurrentNameValidate(false) : setCurrentNameValidate(true)
    formValidateHandler()
  }
  const currentPassHandler = e => {
    setCurrentPassword(e.target.value)
    currentPassword.trim().length <= 8 ? setCurrentPassValidate(false) : setCurrentPassValidate(true)
    formValidateHandler()
  }

  const formValidateHandler = () => {
    if (currentNameValidate && currentPassValidate) {
      setFormValidate(true)
    }else {
      setFormValidate(false)
    }
  }

  const profileButtonHandler = () => {
    const userInputs = { 
      0: [""],
      license: currentValue.license,
      name: currentName,
      password: currentPassword
     }
    localStorage.setItem("accountExist", JSON.stringify(userInputs))
     axios.delete('https://fireship-6470a-default-rtdb.firebaseio.com/user.json')
     axios.post('https://fireship-6470a-default-rtdb.firebaseio.com/user.json', userInputs)
     
  }
  
  return (
    <div className={theme ? 'dashboard-dark text-center' : 'dashboard-light text-center'}>
      <div>
        <button className='w-100' onClick={() => setShow(true)}><i className='fa fa-bars'></i></button>
        <DashboardOffcanvas show={show} handleClose={() => setShow(false)} />
        <div className='container m-auto'>
          <Form className='edit-profile-form'>
          <h2 className='my-3 text-center'>EDIT PROFILE</h2>
            <FloatingLabel
              controlId="floatingInput"
              label="UserName"
              className="mb-3"
              
            >
              <Form.Control type="text" placeholder="UserName"
               value={currentName}
               onInput={(e) => currentNameHandler(e)} />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
              
            >
              <Form.Control type="password" placeholder="Password"
               value={currentPassword}
               onInput={(e) => currentPassHandler(e)} />
            </FloatingLabel>
            { formValidate ? (<Button className='w-100' onClick={() => {profileButtonHandler(); navigate("/dashboard")}}>SUBMIT</Button>) :
             (<Button className='w-100 button-disabled' disabled>SUBMIT</Button>) }
          </Form>
        </div>
      </div>
    </div>
  )
}


export default ProfileDashboard