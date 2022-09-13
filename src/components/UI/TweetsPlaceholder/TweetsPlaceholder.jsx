import { Card, Placeholder } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { darkModeAction } from '../../../control/actions';
import './TweetsPlaceholder.scss'

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
        <Card.Body>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
            <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
  )
}

export default CoursesPlaceholder