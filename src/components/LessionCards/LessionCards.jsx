import React from 'react'
import { Card } from 'react-bootstrap'
import useDarkMode from '../../hooks/useDarkMode'
import Tags from '../SingleTags/SingleTags'
import './LessionCards.scss'

const LessionCards = props => {
    const [ theme ] = useDarkMode()
    let lessonTags = []
    if (props.lession.tags) {
        for (let i = 0;i <= props.lession.tags.length -1 ;i++) {
            lessonTags.push(props.lession.tags[i])
        }
    }

    console.log(lessonTags)

  return (
    <div>
        {props.isSingleLession ? (
        <Card className={theme ? 'lession-card-dark' : 'lession-card-light' } >
                <img src={`./assets/imgs/${props.lession.path}.webp`} />
            <Card.Body className='text-left'>
                <Card.Title className='my-3'>{props.lession.title}</Card.Title>
                <Card.Text className='my-3'>{props.lession.desc}</Card.Text>
                {lessonTags.map(tag => (
                <Tags>{tag}</Tags>
                ))}
            </Card.Body>
        </Card>
        ) : (
        <Card className={theme ? 'lession-card-dark' : 'lession-card-light' } >
            <Card.Body className='text-left'>
                <Card.Title className='my-3'>{props.lession.title}</Card.Title>
                <Card.Text className='my-3'>{props.lession.desc}</Card.Text>
                {lessonTags.map(tag => (
                <Tags>{tag}</Tags>
                ))}
            </Card.Body>
        </Card>
        )}
    </div>
  )
}

export default LessionCards