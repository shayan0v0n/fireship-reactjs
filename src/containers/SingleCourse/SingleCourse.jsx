import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Card, Placeholder } from 'react-bootstrap'
import { coursesAction, licensesAction } from '../../apiControl/actions';
import './SingleCourse.scss'
import useDarkMode from '../../hooks/useDarkMode';
import CheckoutLicense from '../../components/CheckoutLicense/CheckoutLicense';
import SingleLicense from '../../components/SingleLicense/SingleLicense';
import AlertModal from '../../components/UI/AlertModal/AlertModal';
import CoursesPlaceholder from '../../components/UI/CoursesPlaceholder/CoursesPlaceholder';

const SingleCourse = () => {
  const [ isExistToAccount, setIsExistAccount ] = useState(false);
  const [ addToCartModal, setAddToCartModal ] = useState(false)
  const currentAccount = JSON.parse(localStorage.getItem("accountExist"))
  const [theme] = useDarkMode()
  const currentPath = useParams().path;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(licensesAction())
    dispatch(coursesAction())
  }, [])

  const licensesData = useSelector(state => state.licenses)
  const coursesData = useSelector(state => state.courses)
  
  let licenses = []
  let currentCourse = {}
  if (!licensesData.loading && licensesData.license[0]) {
      for(let i = 0;i <= licensesData.license.length -1;i++) {
          licenses.push(licensesData.license[i])
      }
  }
  if (!coursesData.loading && coursesData.courses[0]) {
     currentCourse = coursesData.courses.find(item => {
      return item.path === currentPath
    })
  }
  
  const checkLessonExistHandler = () => {
    if (currentAccount) {
      const courseIndexCart = currentAccount[0].findIndex(item => {
        return item.path == currentCourse.path
      })
      const courseIndexApproved = currentAccount[1].findIndex(item => {
        return item.path == currentCourse.path
      })
      
      if (courseIndexCart !== -1 || courseIndexApproved !== -1) {
        return true
      }else {
        return false
      }
    }else {
      return true
    }
  }

  checkLessonExistHandler()
  
  const addToCartHandler = () => {
    let copiedCurrentAccount = {...currentAccount};
    const currentLesson = currentCourse
    const copiedCart = copiedCurrentAccount[0]
    copiedCart.push(currentLesson)
    const updateCurrentAccount = {
      ...copiedCurrentAccount,
      0: copiedCart
    }
    localStorage.setItem("accountExist", JSON.stringify(updateCurrentAccount));
    setIsExistAccount(true)
    setAddToCartModal(true)
    }
  

  return (
    <div>
      <AlertModal show={addToCartModal} onHide={() => setAddToCartModal(false)} modalTitle="Course Added📙">
        <img src='/assets/gifs/success.gif' className='w-50' />
        <h2>You're Successfully Add Course...😃❤️</h2>
        <h3>I Hope Enjoy It...</h3>
      </AlertModal>
      { !coursesData.loading ? (
        <div className={!theme ? 'text-center my-5 container singleCourse' : 'text-center my-5 container singleCourse-dark'}>
          <div>
            <h2>{currentCourse.title}</h2>
            <hr />
          </div>
          <Row className='m-auto'>
            <Col sm={12} md={9} className="text-start">
              <Card className='lesson main-aside'>
                <img src={`/assets/imgs/${currentCourse.path}.jpg`} className="w-100" id="lessonTag" />
                <Card.Body>
                  <Card.Title className='mt-2'>{ currentCourse.title }</Card.Title>
                  <Card.Text>{ currentCourse.desc }</Card.Text>
                  <span>Course Price: <span>${ currentCourse.price }.00</span></span>
                </Card.Body>
              </Card>
              <div className='pricing'>
              { checkLessonExistHandler() || isExistToAccount ? (
                  <button className='btn w-100 mt-3 pay-button' id='pricing' disabled>ADD TO CART</button>
                ) : (
                  <button className='btn w-100 mt-3 pay-button' id='pricing' onClick={() => addToCartHandler()}>ADD TO CART</button>
                ) }
                <CheckoutLicense />
              </div>
              <div id='licenses'>
              <Row>
                    { licenses.map(license => (
                        <Col sm={12} md={4}>
                            <SingleLicense licenseData={license} />
                            <button className='singleLicense w-100'>CHOOSE PLAN</button>
                        </Col>
                    )) }
                </Row>
              </div>
            </Col>
            <Col sm={12} md={3}>
              <ul className='text-start extra-aside'>
                <a href="#lessonTag"><li>Lesson</li></a>
                <a href="#pricing"><li>Pricing</li></a>
                <a href="#licenses"><li>License</li></a>
              </ul>
            </Col>
          </Row>
        </div>
      ) : (
        <div className={!theme ? 'text-center my-5 container singleLesson' : 'text-center my-5 container singleLesson-dark'}>
        <div>
          <h2><Placeholder xs={8} /></h2>
          <hr />
        </div>
        <Row className='m-auto'>
          <Col sm={12} md={9} className="text-start">
            <Card className='lesson main-aside '>
              <img src={`/assets/imgs/placeholder.png`} className="w-100" id="lessonTag" />
              <Card.Body>
                <Card.Title className='mt-2'><Placeholder xs={8} /></Card.Title>
                <Card.Text><Placeholder xs={6} /></Card.Text>
                <span><Placeholder xs={7} /></span>
              </Card.Body>
            </Card>
            <div className='pricing'>
                <button className='btn w-100 mt-3 pay-button' id='pricing' disabled>ADD TO CART</button>
              <CheckoutLicense />
            </div>
            <div id='licenses'>
            <Row>
                  { [0, 1, 2].map(item => (
                      <Col sm={12} md={4} className="text-center">
                          <CoursesPlaceholder />
                      </Col>
                  )) }
              </Row>
            </div>
          </Col>
          <Col sm={12} md={3}>
            <ul className='text-start extra-aside'>
              <li><Placeholder xs={8} /></li>
              <li><Placeholder xs={6} /></li>
              <li><Placeholder xs={8} /></li>
            </ul>
          </Col>
        </Row>
      </div>
      ) }
    </div>
  )
}

export default SingleCourse