import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { darkModeAction, lessonsAction } from '../../control/actions';
import { Col, Row } from 'react-bootstrap'
import LessonsCard from '../../components/LessionCards/LessionCards'
import CoursePlaceholder from '../../components/UI/CoursesPlaceholder/CoursesPlaceholder'

const SingleCourse = () => {
  const currentPath = useParams().path;
  const currentStorage = JSON.parse(localStorage.getItem('theme'))
  const darkModeData = useSelector(state => state.darkMode)
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(lessonsAction())
    dispatch(darkModeAction(currentStorage))
  }, [])
  
  let currentMode = false
  if (darkModeData) {
    currentMode = darkModeData.mode
  }
  const lessonsData = useSelector(state => state.lessons)
  let currentLessons = []
  if (!lessonsData.loading) {
    lessonsData.lessons.map(lesson => {
      const existing = lesson.tags.findIndex(tag => tag == currentPath)
      if (existing != -1) {
        currentLessons.push(lesson)
      }
    })
  }

  

  return (
    <div>
      { !lessonsData.loading ? (
        <div className='text-center my-3'>
          <div className='container'>
            <h2 style={currentMode ? {color: 'white'} : {color: 'dark'}}>'{ currentPath }' Tag!</h2>
            <hr />  
          </div>
          <Row className='container m-auto'>
            { currentLessons.map(item => (
              <Col sm={12} md={6}>
                <LessonsCard lession={item} isSingleLession={true} />
              </Col>
            )) }
          </Row>
        </div>
      ) : (
      <div className='text-center my-3'>
        <div className='container'>
          <h2 style={currentMode ? {color: 'white'} : {color: 'dark'}}>'{ currentPath }' Tag!</h2>
          <hr />
        </div>
        <Row className='container m-auto'>
            <Col sm={12} md={6}>
              <CoursePlaceholder />
            </Col>
            <Col sm={12} md={6}>
              <CoursePlaceholder />
            </Col>
        </Row>
      </div>
      ) }
    </div>
  )
}

export default SingleCourse