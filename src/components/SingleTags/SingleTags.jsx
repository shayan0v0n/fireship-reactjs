import React from 'react'
import { Link } from 'react-router-dom'
import './SingleTags.scss'

const Tags = props => {
  return (
    <Link to={`/tags/${props.children}`} className='tag'><small> #{props.children} </small></Link>
  )
}

export default Tags