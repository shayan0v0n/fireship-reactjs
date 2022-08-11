import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import useDarkMode from '../../hooks/useDarkMode'
import './TwitterPeople.scss'

const TwitterPeople = props => {
    const { userData } = props
    const [theme] = useDarkMode()
  return (
    <Card className={theme ? 'm-1 p-3 twiiter-cards-dark' : 'm-1 p-3 twiiter-cards-light'}>
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