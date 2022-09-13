import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Placeholder, Card } from 'react-bootstrap'
import './TagsPlaceholder.scss'
import { darkModeAction } from '../../../control/actions';

const TagsPlaceholder = () => {
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
    <Card className={currentMode ? 'tagsPlace-dark' : 'tagsPlace-light'}>
        <Card.Body>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
        </Card.Body>
    </Card>
  )
}

export default TagsPlaceholder