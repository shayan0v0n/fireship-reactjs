import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row } from 'react-bootstrap' 
import CoursesPlaceholder from '../../components/UI/CoursesPlaceholder/CoursesPlaceholder'
import { coursesAction, darkModeAction } from '../../control/actions'
import CardItems from '../../components/CardItems/CardItems'

const Courses = () => {
  const dispatch = useDispatch()
  const currentStorage = JSON.parse(localStorage.getItem('theme'))
  useEffect(() => {
    dispatch(darkModeAction(currentStorage))
    dispatch(coursesAction())
  }, [])

  const darkModeData = useSelector(state => state.darkMode)

  let currentMode = false
  if (darkModeData) {
    currentMode = darkModeData.mode
  }

  const coursesData = useSelector(state => state.courses)
  const courses = []
  if (!coursesData.loading) {
    for(let i = 0;i <= coursesData.courses.length -1;i++) {
      courses.push(coursesData.courses[i])
    }
  }

  return (
    <div className='lessions container mt-5'>
      <h2 className={currentMode ? 'text-white' : 'text-dark'}>WATCH THE LATEST COURSES</h2>
      { !coursesData.loading ? (
      <Row>
        {courses.map((course, index) => (
          <Col sm={12} md={6} key={index}>
            <CardItems currentCourse={course} />
          </Col>
        ))}
      </Row>
      ) : (
      <Row>
        {[1, 2, 3, 4, 5, 6, 7, 8].map(() => (
          <Col sm={12} md={6}>
            <CoursesPlaceholder />
          </Col>
        ))}
      </Row>
      ) }
    </div>
  )
}

export default Courses