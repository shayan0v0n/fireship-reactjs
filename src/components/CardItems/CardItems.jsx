import React, { useEffect } from 'react'
import { Card, Image, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { darkModeAction } from '../../control/actions'
import './CardItems.scss'

const CardItems = props => {
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
    <Card className={currentMode ? 'p-3 m-3 cardItems-dark' : 'p-3 m-3 cardItems-light'}>
        <Image src={`/assets/imgs/${props.currentCourse.path}.jpg`} />
        <Card.Body className="text-center">
            <Card.Title>{ props.currentCourse.title.toUpperCase() }</Card.Title>
            <Card.Text>{ props.currentCourse.desc }</Card.Text>
        </Card.Body>
        <Link to={`/courses/${props.currentCourse.path}`}>
            <Button className='w-100'>Start</Button>
        </Link>
    </Card>
  )
}

export default CardItems