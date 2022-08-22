import { useState } from 'react'
import { Col, Row } from 'react-bootstrap' 
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import DashboardOffcanvas from '../../components/DashboardOffcanvas/DashboardOffcanvas'
import useDarkMode from '../../hooks/useDarkMode'
import './Dashboard.scss'

const Dashboard = () => {
  const [theme] = useDarkMode()
  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  const navigateHandler = route => navigate(route)
  const exitHandler = () => {
    localStorage.removeItem("accountExist")
    axios.delete('https://fireship-6470a-default-rtdb.firebaseio.com/user.json')
    
  }

  return (
    <div className={theme ? 'text-center dashboard-dark' : 'text-center dashboard-light'}>
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
            <div className='dashboard-routes' onClick={() => {exitHandler(); navigateHandler('/')}}>
              Exit
            </div>
          </Col>
          <Col sm={12} md={3}></Col>
        </Row>
      </div>
    </div>
  )
}

export default Dashboard