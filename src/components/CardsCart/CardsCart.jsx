import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { darkModeAction } from '../../control/actions';

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
    <Card className={currentMode ? 'p-3 m-3 cardItems-dark' : 'p-3 m-3 cardItems-light'} style={{ cursor: 'pointer' }}>
        <Card.Body className="text-center">
            <Card.Title>{ props.currentCourse.title.toUpperCase() }</Card.Title>
            <Card.Text>{ props.currentCourse.desc }</Card.Text>
        </Card.Body>
    </Card>
  )
}

export default CardItems