import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap' 
import { useSelector, useDispatch } from 'react-redux'
import CoursesPlaceholder from '../../components/UI/CoursesPlaceholder/CoursesPlaceholder'
import { darkModeAction, lessonsAction } from '../../control/actions'
import LessionCards from '../../components/LessionCards/LessionCards'

const Lessions = () => {
  const currentStorage = JSON.parse(localStorage.getItem('theme'))
  const darkModeData = useSelector(state => state.darkMode)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(darkModeAction(currentStorage))
    dispatch(lessonsAction())
  }, [])
  
  let currentMode = false
  if (darkModeData) {
    currentMode = darkModeData.mode
  }
  const lessonsData = useSelector(state => state.lessons)
  let lessons = []
  if (!lessonsData.loading) {
    for(let i = 0;i <= lessonsData.lessons.length -1;i++) {
      lessons.push(lessonsData.lessons[i])
    }
  }

  return (
    <div className='lessions container mt-5'>
      <h2 className={currentMode ? 'text-white' : 'text-dark'}>WATCH THE LATEST LESSIONS</h2>
      { !lessonsData.loading ? (
      <Row>
        {lessons.map((lession, index) => (
          <Col sm={12} md={6} key={index}>
            <LessionCards lession={lession} isSingleLession={true} />
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

export default Lessions