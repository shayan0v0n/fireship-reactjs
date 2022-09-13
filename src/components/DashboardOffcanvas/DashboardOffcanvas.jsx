import { useNavigate } from 'react-router-dom'
import { Offcanvas } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import axios from 'axios'
import AlertModal from '../UI/AlertModal/AlertModal';
import './DashboardOffcanvas.scss'
import { darkModeAction } from '../../control/actions';
import { useDispatch, useSelector } from 'react-redux';




const DashboardOffcanvas = props => {
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
  const [ exitModal, setExitModal ] = useState(false)
  const navigateHandler = route => navigate(route)
  
  const modalExitHandler = () => setExitModal(true)
    
  const exitHandler = () => {
    localStorage.removeItem("accountExist")
    axios.delete('https://fireship-6470a-default-rtdb.firebaseio.com/user.json')
    navigate('/')
  }
  
  return (
    <>
      <AlertModal show={exitModal} onHide={() => {setExitModal(false)}} modalTitle="Delete Account🚪?" exit={exitHandler}>
        <img src='/assets/imgs/undraw_login_re_4vu2.svg' className='w-50' />
        <h3 className='my-2'>Are You Sure You Want To Delete Your Account??</h3>
        <span>If You Delete Your Account, Delete All Your Products</span>
      </AlertModal>
      <Offcanvas show={props.show} onHide={props.handleClose} className={currentMode ? 'dashboardOffcanvas-dark' : 'dashboardOffcanvas-light'}>
      <Offcanvas.Header closeButton>
        <Offcanvas.Title onClick={() => navigateHandler('/dashboard')} style={{ cursor: 'pointer' }}>Dashboard</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body className='pt-5 m-0 p-0'>
        <ul className='dashboard-list'>
          <li onClick={() => navigateHandler('/dashboard/cartDashboard')}><i className='fa fa-suitcase px-2'></i>Cart</li>
          <li onClick={() => navigateHandler('/dashboard/productsDashboard')}><i className='fa fa-camera px-2'></i>Products</li>
          <li onClick={() => navigateHandler('/license')}><i className='fa fa-rocket px-2'></i>License</li>
          <li onClick={() => navigateHandler('/dashboard/profileDashboard')}><i className='fa fa-user px-2'></i>Profile</li>
          <li onClick={() => {modalExitHandler()}}><i className='fa fa-circle px-2'></i>Exit</li>
        </ul>
      </Offcanvas.Body>
    </Offcanvas>
    </>
  )
}

export default DashboardOffcanvas;