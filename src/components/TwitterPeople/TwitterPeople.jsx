import React, { useEffect } from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { darkModeAction } from '../../control/actions'
import './TwitterPeople.scss'

const TwitterPeople = props => {
    const { userData } = props
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
    <Card className={currentMode ? 'm-1 p-3 twiiter-cards-dark' : 'm-1 p-3 twiiter-cards-light'}>
        <Card.Body>
            <Row className='mb-5'>
                <Col><img src={`./assets/imgs/${userData.userName}.jpg`} className='rounded-circle w-75' /></Col>
                <Col>
                    <span>{userData.userName}</span>
                    <br />
                    <span>{userData.twitterID}</span>
                </Col>
                <Col>
                    <i className='fa fa-twitter'></i>
                </Col>
            </Row>
            <p>{userData.tweet}</p>
        </Card.Body>
    </Card>
  )
}

export default TwitterPeople