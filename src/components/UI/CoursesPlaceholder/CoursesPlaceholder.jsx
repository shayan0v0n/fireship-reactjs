import { useEffect } from 'react'
import { Card, Placeholder } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { darkModeAction } from '../../../control/actions'
import './CoursesPlaceholder.scss'

const CoursesPlaceholder = () => {
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

    return (
        <Card className={currentMode ? 'p-3 m-3 coursesPlace-dark' : 'p-3 m-3 coursesPlace-light'}>
        <Card.Img variant="top" src="/assets/imgs/placeholder.png" />
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
          <Placeholder.Button variant="primary" xs={6} />
        </Card.Body>
      </Card>
  )
}

export default CoursesPlaceholder