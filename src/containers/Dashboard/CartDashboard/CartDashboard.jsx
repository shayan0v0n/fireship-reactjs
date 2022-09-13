import { useEffect, useState } from 'react'
import DashboardOffcanvas from '../../../components/DashboardOffcanvas/DashboardOffcanvas'
import { Row, Col, Card, Tooltip, OverlayTrigger } from 'react-bootstrap'
import CardsCart from '../../../components/CardsCart/CardsCart'
import AlertModal from '../../../components/UI/AlertModal/AlertModal'
import './CartDashboard.scss'
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
  const [ showCartModal, setShowCartModal ] = useState(false)
  const currentAccount = JSON.parse(localStorage.getItem("accountExist"))
  let addPrice = 0
  if (currentAccount !== null) {
    addPrice = currentAccount[0].reduce((total, item) => {
      return total + item.price
    }, 0)
  }

  const deleteProductInCart = currntProduct => {
    const copiedCurrentAccount = {...currentAccount};
    const updatedCurrentAccountCart = copiedCurrentAccount[0].filter(item => item.path !== currntProduct.path)
    const updatedCurrentAccount = {
      ...copiedCurrentAccount,
      0: updatedCurrentAccountCart
    }
    localStorage.setItem("accountExist", JSON.stringify(updatedCurrentAccount))
    setShowCartModal(false)
  }

  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      DELETE WITH RIGHT CLICK
    </Tooltip>
  );

  const checkoutAllHandler = () => {
    const copiedCurrentAccount = {...currentAccount};
    const updatedCurrentAccountCart = []
    const updatedCurrentAccount = {
      ...copiedCurrentAccount,
      0: updatedCurrentAccountCart,
      1: copiedCurrentAccount[0]
    }
    localStorage.setItem("accountExist", JSON.stringify(updatedCurrentAccount))
    setShowCartModal(false)
  }

  return (
    <div className={currentMode ? 'dashboard-dark' : 'dashboard-light'}>
      <AlertModal show={showCartModal} onHide={() => {setShowCartModal(false)}} modalTitle="Checkout All Products📋">
      <Row>
        <h2>ALL PRICE: ${addPrice}.00</h2>
          { currentAccount[0].map(item => (
            <OverlayTrigger
            placement="left"
            overlay={renderTooltip}>
            <Col sm={12}>
                <Card className={'p-3 m-3'} onContextMenu={() => {deleteProductInCart(item)}}>
                  <Card.Body className="text-center">
                      <Card.Title>{ item.title.toUpperCase() }</Card.Title>
                      <Card.Text>{ item.desc }</Card.Text>
                      <Card.Text>PRICE: ${ item.price }.00</Card.Text>
                  </Card.Body>
                </Card>
            </Col>
          </OverlayTrigger>
          )) }
          <a
           style={{ textDecoration: 'none', fontWeight: 'bold', fontSize:'1.3rem' }}
           onClick={() => checkoutAllHandler()}
           href='#'>CHECKOUT ALL PRODUCTS</a>
      </Row>
      </AlertModal>
    { currentAccount !== null ? (
      <div>
        <button className='w-100' onClick={() => setShow(true)}><i className='fa fa-bars'></i></button>
        <DashboardOffcanvas show={show} handleClose={() => setShow(false)} />
        { currentAccount[0].length !== 0 ? (
          <>
          <button className='w-100 checkout-btn' onClick={() => setShowCartModal(true)}>CHECKOUT, ${addPrice}.00</button>
          <div className='mt-5 container'>
            <Row>
              { currentAccount[0].map(item => (
                <Col sm={12} md={6}>
                  <CardsCart currentCourse={item} />
                </Col>
              )) }
            </Row>
          </div>
          </>
        ) : (
          <div className='my-5 text-center py-5'>
            <h2 className=''>Cart Page Have'nt Got Product😉💡</h2>
            <span>Please Add Some Course And Lesson & Then Check Here...</span>
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