import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { Col, Row, Card } from 'react-bootstrap'
import { lessonsAction, licensesAction } from '../../apiControl/actions';
import './SingleLesson.scss'
import useDarkMode from '../../hooks/useDarkMode';
import CheckoutLicense from '../../components/CheckoutLicense/CheckoutLicense';
import SingleLicense from '../../components/SingleLicense/SingleLicense';
import { useState } from 'react';

const SingleLesson = () => {
  const [theme] = useDarkMode()
  const [ isExistToAccount, setIsExistAccount ] = useState(false);
  const currentAccount = JSON.parse(localStorage.getItem("accountExist"))
  const currentPath = useParams().path;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(licensesAction())
    dispatch(lessonsAction())
  }, [])

  const licensesData = useSelector(state => state.licenses)
  const lessonsData = useSelector(state => state.lessons)
  
  let licenses = []
  let currentCourse = {}
  if (!licensesData.loading && licensesData.license[0]) {
      for(let i = 0;i <= licensesData.license.length -1;i++) {
          licenses.push(licensesData.license[i])
      }
  }
  if (!lessonsData.loading && lessonsData.lessons[0]) {
      currentCourse = lessonsData.lessons.find(item => {
      return item.path === currentPath
    })
  }

  const checkLessonExistHandler = () => {
    const courseIndex = currentAccount[0].findIndex(item => {
      return item.path == currentCourse.path
    })
    
    if (courseIndex !== -1) {
      return true
    }else {
      return false
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
    }

  return (
    <div>
      { !lessonsData.loading && !licensesData.loading ? (
        <div className={!theme ? 'text-center my-5 container singleLesson' : 'text-center my-5 container singleLesson-dark'}>
          <div>
            <h2>{currentCourse.title}</h2>
            <hr />
          </div>
          <Row className='m-auto'>
            <Col sm={12} md={9} className="text-start">
              <Card className='lesson main-aside '>
                <img src={`/assets/imgs/${currentCourse.path}.webp`} className="w-100" id="lessonTag" />
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
      ) : null }
    </div>
  )
}

export default SingleLesson