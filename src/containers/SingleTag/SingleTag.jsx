import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { lessonsAction } from '../../apiControl/actions';
import { Col, Row } from 'react-bootstrap'
import LessonsCard from '../../components/LessionCards/LessionCards'
import CoursePlaceholder from '../../components/UI/CoursesPlaceholder/CoursesPlaceholder'
import useDarkMode from '../../hooks/useDarkMode';

const SingleCourse = () => {
  const currentPath = useParams().path;
  const [theme] = useDarkMode()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(lessonsAction())
  }, [])

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
            <h2 style={theme ? {color: 'white'} : {color: 'dark'}}>'{ currentPath }' Tag!</h2>
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
          <h2 style={theme ? {color: 'white'} : {color: 'dark'}}>'{ currentPath }' Tag!</h2>
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