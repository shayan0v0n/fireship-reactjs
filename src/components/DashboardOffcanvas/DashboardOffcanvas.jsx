import { useNavigate } from 'react-router-dom'
import useDarkMode from '../../hooks/useDarkMode';
import { Offcanvas } from 'react-bootstrap';
import './DashboardOffcanvas.scss'
import axios from 'axios'


const DashboardOffcanvas = props => {
    const [theme] = useDarkMode()
    const navigate = useNavigate()
    const navigateHandler = route => navigate(route)
    const exitHandler = () => {
      localStorage.removeItem("accountExist")
      axios.delete('https://fireship-6470a-default-rtdb.firebaseio.com/user.json')
    }


  return (
    <Offcanvas show={props.show} onHide={props.handleClose} className={theme ? 'dashboardOffcanvas-dark' : 'dashboardOffcanvas-light'}>
    <Offcanvas.Header closeButton>
      <Offcanvas.Title onClick={() => navigateHandler('/dashboard')} style={{ cursor: 'pointer' }}>Dashboard</Offcanvas.Title>
    </Offcanvas.Header>
    <Offcanvas.Body className='pt-5 m-0 p-0'>
      <ul className='dashboard-list'>
        <li onClick={() => navigateHandler('/dashboard/cartDashboard')}><i className='fa fa-suitcase px-2'></i>Cart</li>
        <li onClick={() => navigateHandler('/dashboard/productsDashboard')}><i className='fa fa-camera px-2'></i>Products</li>
        <li onClick={() => navigateHandler('/license')}><i className='fa fa-rocket px-2'></i>License</li>
        <li onClick={() => navigateHandler('/dashboard/profileDashboard')}><i className='fa fa-user px-2'></i>Profile</li>
        <li onClick={() => {exitHandler(); navigateHandler('/')}}><i className='fa fa-circle px-2'></i>Exit</li>
      </ul>
    </Offcanvas.Body>
  </Offcanvas>
  )
}

export default DashboardOffcanvas;