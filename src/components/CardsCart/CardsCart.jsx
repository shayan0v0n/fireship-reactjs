import React from 'react'
import { Card, Image, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useDarkMode from '../../hooks/useDarkMode'

const CardItems = props => {
    const [theme] = useDarkMode()
    return (
    <Card className={theme ? 'p-3 m-3 cardItems-dark' : 'p-3 m-3 cardItems-light'} style={{ cursor: 'pointer' }}>
        <Card.Body className="text-center">
            <Card.Title>{ props.currentCourse.title.toUpperCase() }</Card.Title>
            <Card.Text>{ props.currentCourse.desc }</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default CardItems