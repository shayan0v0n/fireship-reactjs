import { useState } from 'react'
import useDarkMode from '../../../hooks/useDarkMode'
import DashboardOffcanvas from '../../../components/DashboardOffcanvas/DashboardOffcanvas'
import { Row, Col } from 'react-bootstrap'
import CardsCart from '../../../components/CardsCart/CardsCart'

const ProductsDashboard = () => {
  const [theme] = useDarkMode()
  const [show, setShow] = useState(true);
  const currentAccount = JSON.parse(localStorage.getItem("accountExist"))

  return (
    <div className={theme ? 'dashboard-dark' : 'dashboard-light'}>
      <div>
        <button className='w-100' onClick={() => setShow(true)}><i className='fa fa-bars'></i></button>
        <DashboardOffcanvas show={show} handleClose={() => setShow(false)} />
        <div className='mt-5 container'>
          <Row>
            { currentAccount[0].map(item => (
            <Col sm={12} md={4}>
              <CardsCart currentCourse={item} />
            </Col>
            )) }
          </Row>
        </div>
      </div>
    </div>
  )
}


export default ProductsDashboard