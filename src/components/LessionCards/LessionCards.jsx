import React from 'react'
import { Card } from 'react-bootstrap'
import useDarkMode from '../../hooks/useDarkMode'
import Tags from '../SingleTags/SingleTags'
import { Link } from 'react-router-dom'
import './LessionCards.scss'

const LessionCards = props => {
    const [ theme ] = useDarkMode()
    let lessonTags = []
    if (props.lession.tags) {
        for (let i = 0;i <= props.lession.tags.length -1 ;i++) {
            lessonTags.push(props.lession.tags[i])
        }
    }

  return (
      <Card className={theme ? 'lession-card-dark' : 'lession-card-light' } >
            {props.isSingleLession ? (
                <img src={`/assets/imgs/${props.lession.path}.webp`} />
                ) : null}
            <Card.Body className='text-left'>
                <Link to={`/lessons/${props.lession.path}`}>
                <Card.Title className='my-3'>{props.lession.title}</Card.Title>
                </Link>
                <Card.Text className='my-3'>{props.lession.desc}</Card.Text>
                {lessonTags.map(tag => (
                    <Tags>{tag}</Tags>
                    ))}
            </Card.Body>
        </Card>
  )
}

export default LessionCards