import { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap' 
import { useSelector, useDispatch } from 'react-redux'
import CoursesPlaceholder from '../../components/UI/CoursesPlaceholder/CoursesPlaceholder'
import { lessonsAction } from '../../apiControl/actions'
import LessionCards from '../../components/LessionCards/LessionCards'
import useDarkMode from '../../hooks/useDarkMode'

const Lessions = () => {
  const [theme] = useDarkMode()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(lessonsAction())
  }, [])

  const lessonsData = useSelector(state => state.lessons)
  let lessons = []
  if (!lessonsData.loading) {
    for(let i = 0;i <= lessonsData.lessons.length -1;i++) {
      lessons.push(lessonsData.lessons[i])
    }
  }

  return (
    <div className='lessions container mt-5'>
      <h2 className={theme ? 'text-white' : 'text-dark'}>WATCH THE LATEST LESSIONS</h2>
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