import { useEffect, useState } from 'react'
import DashboardOffcanvas from '../../../components/DashboardOffcanvas/DashboardOffcanvas'
import CardsCart from '../../../components/CardsCart/CardsCart'
import './ProductsDashboard.scss'
import AlertModal from '../../../components/UI/AlertModal/AlertModal'
import { Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { darkModeAction } from '../../../control/actions'

const ProductsDashboard = () => {
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

  const [show, setShow] = useState(true);
  const currentAccount = JSON.parse(localStorage.getItem("accountExist"))
  const [ showCartModal, setShowCartModal ] = useState(false)
  let addPrice = 0
  if (currentAccount !== null) {
    addPrice = currentAccount[1].reduce((total, item) => {
      return total + item.price
    }, 0)
  }

  return (
    <div className={currentMode ? 'dashboard-dark' : 'dashboard-light'}>
      <AlertModal show={showCartModal} onHide={() => {setShowCartModal(false)}} modalTitle="Check All Products📋">
      <Row>
        <h2>ALL PRICE: ${addPrice}.00</h2>
          { currentAccount[1].map(item => (
            <Col sm={12}>
                <Card className={'p-3 m-3'}>
                  <Card.Body className="text-center">
                      <Card.Title>{ item.title.toUpperCase() }</Card.Title>
                      <Card.Text>{ item.desc }</Card.Text>
                      <Card.Text>PRICE: ${ item.price }.00</Card.Text>
                  </Card.Body>
                </Card>
            </Col>
          )) }
          <Link to="/courses" style={{ textDecoration: 'none', fontWeight: 'bold', fontSize:'1.3rem' }}>
            <span>SHOW MORE PRODUCTS</span>
          </Link>
      </Row>
      </AlertModal>
      <button className='w-100' onClick={() => setShow(true)}><i className='fa fa-bars'></i></button>
      { currentAccount !== null ? (
      <div>
        <button className='w-100 checkout-btn' onClick={() => setShowCartModal(true)}>STATUS</button>
        <DashboardOffcanvas show={show} handleClose={() => setShow(false)} />
        { currentAccount[1].length !== 0 ? (
          <div className='mt-5 container'>
            <Row>
              { currentAccount[1].map(item => (
                <Col sm={12} md={6}>
                    <CardsCart currentCourse={item} />
                </Col>
              )) }
            </Row>
          </div>
        ) : (
          <div className='my-5 text-center py-5'>
            <h2>Products Page Have'nt Got Product😉💡</h2>
            <span>Please Checkout Some Course Or Lesson & Then Check Here....</span>
          </div>
        ) }
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


export default ProductsDashboard