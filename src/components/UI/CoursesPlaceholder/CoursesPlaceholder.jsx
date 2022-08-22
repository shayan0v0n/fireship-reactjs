import { Card, Placeholder } from 'react-bootstrap'
import useDarkMode from '../../../hooks/useDarkMode'
import './CoursesPlaceholder.scss'

const CoursesPlaceholder = () => {
    const [theme] = useDarkMode()

    return (
        <Card className={theme ? 'p-3 m-3 coursesPlace-dark' : 'p-3 m-3 coursesPlace-light'}>
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