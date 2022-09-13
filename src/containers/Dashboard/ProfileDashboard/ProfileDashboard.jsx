import { useEffect, useState } from 'react'
import { Form, FloatingLabel, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import DashboardOffcanvas from '../../../components/DashboardOffcanvas/DashboardOffcanvas'
import './ProfileDashboard.scss'
import { useDispatch, useSelector } from 'react-redux'
import { darkModeAction } from '../../../control/actions'

const ProfileDashboard = () => {
const currentAccount = JSON.parse(localStorage.getItem('accountExist'))
const currentStorage = JSON.parse(localStorage.getItem('theme'))
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(darkModeAction(currentStorage))
  }, [])

  const darkModeData = useSelector(state => state.darkMode)

  let currentMode = false
  if (darkModeData) {
    currentMode = darkModeData.mode
  }

  const navigate = useNavigate()
  const [show, setShow] = useState(true);
  const [ currentName, setCurrentName ] = useState(currentAccount)
  const [ currentPassword, setCurrentPassword ] = useState(currentAccount)
  const [ currentNameValidate, setCurrentNameValidate ] = useState(true);
  const [ currentPassValidate, setCurrentPassValidate ] = useState(true);
  const [ formValidate, setFormValidate ] = useState(false);

  let currentNameHandler = () => {}
  let currentPassHandler = () => {}
  let formValidateHandler = () => {}
  let profileButtonHandler = () => {}
if (currentAccount !== null) {
   currentNameHandler = e => {
    setCurrentName(e.target.value)
    currentName.name.trim().length <= 8 ? setCurrentNameValidate(false) : setCurrentNameValidate(true)
    formValidateHandler()
  }
   currentPassHandler = e => {
    setCurrentPassword(e.target.value)
    currentPassword.password.trim().length <= 8 ? setCurrentPassValidate(false) : setCurrentPassValidate(true)
    formValidateHandler()
  }

   formValidateHandler = () => {
    if (currentNameValidate && currentPassValidate) {
      setFormValidate(true)
    }else {
      setFormValidate(false)
    }
  }
  
   profileButtonHandler = () => {
    let userInputs = {}
    if (typeof currentName == "string") {
       userInputs = { 
        0: [],
        1: [],
        license: currentAccount.license,
        name: currentName,
        password: currentPassword
       }
      }else {
       userInputs = { 
        0: [],
        1: [],
        license: currentAccount.license,
        name: currentName.name,
        password: currentPassword.password
       }
    }
    localStorage.setItem("accountExist", JSON.stringify(userInputs))
  }
}

  return (
    <div className={currentMode ? 'dashboard-dark text-center' : 'dashboard-light text-center'}>
        { currentAccount !== null ? (
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
               value={currentName.name}
               onInput={(e) => currentNameHandler(e)} />
            </FloatingLabel>
            <FloatingLabel
              controlId="floatingInput"
              label="Password"
              className="mb-3"
              
            >
              <Form.Control type="password" placeholder="Password"
               value={currentPassword.password}
               onInput={(e) => currentPassHandler(e)} />
            </FloatingLabel>
            { formValidate ? (<Button className='w-100' onClick={() => {profileButtonHandler(); navigate("/dashboard")}}>SUBMIT</Button>) :
             (<Button className='w-100 button-disabled' disabled>SUBMIT</Button>) }
          </Form>
        </div>
      </div>
        ) : (
          <div className='my-5 text-center py-5 dashboard-err'>
          <h2>You Should Register First👽👊</h2>
          <span>Please Register First, If You Want Use Dashboard...</span>
        </div>
        ) }
    </div>
  )
}


export default ProfileDashboard