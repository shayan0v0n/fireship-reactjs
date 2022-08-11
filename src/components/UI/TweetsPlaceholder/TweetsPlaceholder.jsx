import { Card, Placeholder } from 'react-bootstrap'
import useDarkMode from '../../../hooks/useDarkMode'
import './TweetsPlaceholder.scss'

const CoursesPlaceholder = () => {
    const [theme] = useDarkMode()

    return (
        <Card className={theme ? 'p-3 m-3 coursesPlace-dark' : 'p-3 m-3 coursesPlace-light'}>
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