import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'
import { Row, Col, Button, Image } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { coursesAction, lessonsAction, tweetsAction } from '../../apiControl/actions'
import TwitterPeople from '../../components/TwitterPeople/TwitterPeople'
import LessionCards from '../../components/LessionCards/LessionCards'
import CardItems from '../../components/CardItems/CardItems'
import useDarkMode from '../../hooks/useDarkMode'
import CoursesPlaceholder from '../../components/UI/CoursesPlaceholder/CoursesPlaceholder'
import TweetsPlaceholder from '../../components/UI/TweetsPlaceholder/TweetsPlaceholder'
import './Home.scss'

const Home = () => {
  const [theme] = useDarkMode()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(coursesAction())
    dispatch(lessonsAction())
    dispatch(tweetsAction())
  }, [])
  
  const lessonsData = useSelector(state => state.lessons)
  const coursesData = useSelector(state => state.courses)
  const tweetsData = useSelector(state => state.tweets)

  let newCourse = []
  let learnByDoing = []
  let modernFullstack = []
  let newToDevelopment = []

  if (!coursesData.loading && coursesData.courses[0]) {
    newCourse.push(coursesData.courses[0])
    newCourse.push(coursesData.courses[1])
    learnByDoing.push(coursesData.courses[2])
    learnByDoing.push(coursesData.courses[3])
    modernFullstack.push(coursesData.courses[4])
    modernFullstack.push(coursesData.courses[5])
    newToDevelopment.push(coursesData.courses[6])
    newToDevelopment.push(coursesData.courses[7])
  }
  
  const [ lessions, setLessions ] = useState([
    {lessionID: 1, coursePath: 'angular', coursePrice: 29, courseTitle: 'Angular 12 Firebase Project Course', courseDesc: 'Build a high-performance progressive web application (PWA) with Angular & Firebase', courseTag: ['vue', 'nuxt', 'firebase']},
    {lessionID: 1, coursePath: 'angular', coursePrice: 29, courseTitle: 'Angular 12 Firebase Project Course', courseDesc: 'Build a high-performance progressive web application (PWA) with Angular & Firebase', courseTag: ['typescript']}
  ])
  
  const tweets = []
  
  if (!tweetsData.loading && tweetsData.tweets[0]) {
    for(let i = 0;i <= tweetsData.tweets.length - 1; i++) {
      tweets.push(tweetsData.tweets[i])
    }
  }
  
  let singleLesson = {}
  let lessons = []

  if (!lessonsData.loading && lessonsData.lessons[0]) {
    singleLesson = lessonsData.lessons[0]
    for(let i = 0;i <= 5; i++) {
      lessons.push(lessonsData.lessons[i])
    }
  }  

  
  return (
    <div className={theme ? 'container main-home-dark' : 'container main-home-light'}>
      <section>
      <Row className='my-5  main-banner'>
        <Col md='6' sm='12'>
          <h2>BUILD AND SHIP YOUR APP</h2>
          <h3>FASTER</h3>
          <div>
            <span className='main-banner__text'>Fireship.io is a <small>gateway drug</small> for <br />
             developers who want to <span> build <br />
              awesome web & mobile apps.</span></span>
          </div>
          <div className='mt-3'>
            <Link to='/lessions'><button className='main-banner__buttons main-banner__lessons'>FREE LESSONS</button></Link>
            <Link to='/courses'><button className='main-banner__buttons main-banner__courses'>PRO COURSES</button></Link>
          </div>
        </Col>
        <Col md='6' sm='12'>
          <img src='./assets/imgs/pro.png' className='w-100' />
        </Col>
      </Row>
      </section>
      <hr style={{borderBottom: '1px dashed white'}} />
      <section className='pt-5'>
        <div className="text-center">
          <h2>NEW COURSES</h2>
          <span>BAND NEW COURSES AND UPDATES EVERY MONTH</span>
        </div>
        <div>
        {!coursesData.loading ? (
          <Row className='m-0 mt-3'>
            {
              newCourse.map(course => (
                <Col md='6' sm='12' key={course.id} >
                    <CardItems currentCourse={course} />
                </Col>
              ))
            }
        </Row>
        ) : (
          <Row className='m-0 mt-3'>
              <Col md='6' sm='12' >
                  <CoursesPlaceholder />
              </Col>
              <Col md='6' sm='12' >
                  <CoursesPlaceholder />
              </Col>
        </Row>
        )}
        </div>
      </section>
      <section className='pt-5'>
        <div className="text-center">
          <h2>LEARN BY DOING</h2>
          <span>FAST, EFFICIENT, PROJECT-BASED VIDEO COURSE</span>
        </div>
        <div>
          {!coursesData.loading ? (
            <Row className='m-0 mt-3'>
              {
                learnByDoing.map(course => (
                  <Col md='6' sm='12' key={course.id}>
                      <CardItems currentCourse={course} />
                  </Col>
                ))
              }
          </Row>
          ) : (
            <Row className='m-0 mt-3'>
                <Col md='6' sm='12' >
                    <CoursesPlaceholder />
                </Col>
                <Col md='6' sm='12' >
                    <CoursesPlaceholder />
                </Col>
          </Row>
          )}
        </div>
      </section>
      <section className='pt-5'>
        <div className="text-center">
          <h2>MODERN FULLSTACK</h2>
          <span>DEVELOP FASTER WITH SCALABLE CLOUD INFRASTRUCTURE</span>
        </div>
        <div>
          {!coursesData.loading ? (
          <Row className='m-0 mt-3'>
              {modernFullstack.map(course => (
              <Col md='6' sm='12' >
                  <CardItems currentCourse={course} />
              </Col>
              ))}
          </Row>
          ) : (
            <Row className='m-0 mt-3'>
                <Col md='6' sm='12' >
                    <CoursesPlaceholder />
                </Col>
                <Col md='6' sm='12' >
                    <CoursesPlaceholder />
                </Col>
          </Row>
          )}
        </div>
      </section>
      <section className='pt-5'>
        <div className="text-center">
          <h2>NEW TO DEVELOPMENT?</h2>
          <span>MASTER THE BASICS FIRST 👇</span>
        </div>
        <div>
          {!coursesData.loading ? (
            <Row className='m-0 mt-3'>
                {newToDevelopment.map(course => (
                <Col md='6' sm='12' key={course.id}>
                    <CardItems currentCourse={course} />
                </Col>
                ))}
            </Row>
          ) : (
            <Row className='m-0 mt-3'>
                <Col md='6' sm='12' >
                    <CoursesPlaceholder />
                </Col>
                <Col md='6' sm='12' >
                    <CoursesPlaceholder />
                </Col>
          </Row>
          )}
        </div>
      </section>
      <section className='text-center py-5'>
        <LinkContainer to='/courses'>
          <Button className='all-pro-course-btn'>ALL PRO COURSES</Button>
        </LinkContainer>
      </section>
      <section className='my-5 text-center twitters-banner'>
              <h2>💖LOVED BY DEVELOPERS SINCE 2022</h2>
              <hr style={{borderBottom: '1px dashed white'}} />
              <span>"I HAVE A JOB THANKS TO YOU"</span>
              <Image src='./assets/imgs/twitters.png' className='w-100' />
      </section>
      <section className='my-5'>
        { !tweetsData.loading ? (
        <Row>
          {tweets.map(user => (
            <Col sm='12' md='4' key={user.id}>
                <TwitterPeople userData={user} />
            </Col>
          ))}
        </Row>
        ) : (
          <Row>
            {[1, 2, 3, 4, 5, 6].map(item => (
              <Col sm='12' md='4'>
                  <TweetsPlaceholder />
              </Col>
            ))}
          </Row>
        ) }
        
      </section>
      <section className='my-5'>
          <div className='text-center'>
              <h2>Extraordinary Code Tutorials</h2>
              <span>FAST-PACED SOFTWARE DEV CONTENT YOU'LL ACTUALLY ENJOY WATCHING</span>
          </div>
          <div className=' mt-5'>
            <Row>
              <Col md={3} sm={12}></Col>
              <Col md={6} sm={12}>
                { !lessonsData.loading ? (
                  <LessionCards lession={singleLesson} isSingleLession={true} />
                ) : <CoursesPlaceholder /> }
              </Col>
              <Col md={3} sm={12}></Col>
            </Row>
          </div>
          <div className='mt-5'>

            { !lessonsData.loading ? (
            <Row>
              {lessons.map(lessonsItem => (
                <Col md={6} sm={12} key={lessonsItem.id}>
                  <LessionCards lession={lessonsItem} isSingleLession={false} />
                </Col>
              ))}
            </Row>
            ) : (
            <Row>
              {[1, 2, 3, 4, 5, 6].map(item => (
                <Col md={6} sm={12}>
                  <CoursesPlaceholder />
                </Col>
              ))}
            </Row>
            ) }
          </div>
      </section>
      <section className='my-5 text-center'>
            <h2>MULTIPLE LEARNING FORMATS</h2>
            <span>CONTENT FOR COMPLETE BEGINNERS AND EXPERIENCED ENGINEERS</span>
            <div className='videos-navigate-buttons'>
              <Link to='/courses'><button className='video-navigate__fullCourses'>FULL COURSES</button></Link>
              <Link to='lessions'><button className='video-navigate__sinceLessions'>SINCE LESSIONS</button></Link>
              <Link to='/tags'><button className='video-navigate__quickFind'>QUICK FIND</button></Link>
            </div>
      </section>
      <section>
        <div className='me-info my-5'>
          <Row>
            <Col sm={12} md={6}>
              <img src="./assets/imgs/me.jpeg" className='w-75 rounded-circle border border-secondary' />
            </Col>
            <Col sm={12} md={6}>
              <div>
                <h2 className='mb-4'>🎙️ Your Host</h2>
                <span>Hi, I'm Shayan Vosoughi and the only thing I know is that I know nothing. I've been building software for over 3 years and started this project with a simple mission... 👉 create practical content that increases <b>developer happiness and productivity 🚀</b></span>
                <br />
                <p className='mt-3'>📜 Fireship Manifesto</p>
              </div>
            </Col>
          </Row>
        </div>
      </section>
    </div>
  )
}

export default Home