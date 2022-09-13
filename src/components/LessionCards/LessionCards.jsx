import React, { useEffect } from 'react'
import { Card } from 'react-bootstrap'
import Tags from '../SingleTags/SingleTags'
import { Link } from 'react-router-dom'
import './LessionCards.scss'
import { useDispatch, useSelector } from 'react-redux'
import { darkModeAction } from '../../control/actions'

const LessionCards = props => {
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


    let lessonTags = []
    if (props.lession.tags) {
        for (let i = 0;i <= props.lession.tags.length -1 ;i++) {
            lessonTags.push(props.lession.tags[i])
        }
    }

  return (
      <Card className={currentMode ? 'lession-card-dark' : 'lession-card-light' } >
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