import React from 'react'
import { Card, Image, Button } from 'react-bootstrap'
import useDarkMode from '../../hooks/useDarkMode'
import './CardItems.scss'

const CardItems = props => {
    const [theme] = useDarkMode()
    return (
    <Card className={theme ? 'p-3 m-3 cardItems-dark' : 'p-3 m-3 cardItems-light'}>
        <Image src={`./assets/imgs/${props.currentCourse.path}.jpg`} />
        <Card.Body className="text-center">
            <Card.Title>{ props.currentCourse.title.toUpperCase() }</Card.Title>
            <Card.Text>{ props.currentCourse.desc }</Card.Text>
        </Card.Body>
        <Button>Start</Button>
    </Card>
  )
}

export default CardItems