import { useState } from 'react'
import { Col, Row } from 'react-bootstrap' 
import { useNavigate } from 'react-router-dom'
import DashboardOffcanvas from '../../components/DashboardOffcanvas/DashboardOffcanvas'
import useDarkMode from '../../hooks/useDarkMode'
import AlertModal from '../../components/UI/AlertModal/AlertModal'
import './Dashboard.scss'

const Dashboard = () => {
  const [theme] = useDarkMode()
  const [show, setShow] = useState(true);
  const [ exitModal, setExitModal ] = useState(false)
  const navigate = useNavigate();
  const navigateHandler = route => navigate(route)
  const modalExitHandler = () => setExitModal(true)
  const currentAccount = JSON.parse(localStorage.getItem("accountExist"))

  const exitHandler = () => {
    localStorage.removeItem("accountExist")
    navigate('/')
  }

  return (
    <div className={theme ? 'text-center dashboard-dark' : 'text-center dashboard-light'}>
    { currentAccount !== null ? (
      <>
      <AlertModal show={exitModal} onHide={() => {setExitModal(false)}} modalTitle="Delete Account🚪?" exit={exitHandler}>
        <h3 className='my-5'>Are You Sure You Want To Delete Your Account??</h3>
      </AlertModal>
        <div>
          <button className='w-100' onClick={() => setShow(true)}><i className='fa fa-bars'></i></button>
          <DashboardOffcanvas show={show} handleClose={() => setShow(false)} />
        </div>
        <div className='container my-5 m-auto'>
          <Row>
            <Col sm={12} md={6}>
              <div className='dashboard-routes' onClick={() => navigateHandler("/dashboard/productsDashboard")}>
                PRODUCTS
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className='dashboard-routes' onClick={() => navigateHandler("/dashboard/cartDashboard")}>
                CART
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className='dashboard-routes' onClick={() => navigateHandler("/dashboard/profileDashboard")}>
                PROFILE
              </div>
            </Col>
            <Col sm={12} md={6}>
              <div className='dashboard-routes' onClick={() => navigateHandler("/license")}>
                LICENSE
              </div>
            </Col>
          </Row>
          <Row>
            <Col sm={12} md={3}></Col>
            <Col sm={12} md={6}>
              <div className='dashboard-routes' onClick={() => {modalExitHandler()}}>
                Exit
              </div>
            </Col>
            <Col sm={12} md={3}></Col>
          </Row>
        </div>
      </>
      ) : (
      <div className='my-5 text-center py-5 dashboard-err'>
        <h2>You Should Register First👽👊</h2>
        <span>Please Register First, If You Want Use Dashboard...</span>
      </div>
      ) }
    </div>
  )
}

export default Dashboard