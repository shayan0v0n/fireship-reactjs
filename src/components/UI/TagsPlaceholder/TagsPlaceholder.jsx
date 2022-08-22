import useDarkMode from '../../../hooks/useDarkMode'
import { Placeholder, Card } from 'react-bootstrap'
import './TagsPlaceholder.scss'

const TagsPlaceholder = () => {
    const [theme] = useDarkMode()

    return (
    <Card className={theme ? 'tagsPlace-dark' : 'tagsPlace-light'}>
        <Card.Body>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={12} />
          </Placeholder>
        </Card.Body>
    </Card>
  )
}

export default TagsPlaceholder