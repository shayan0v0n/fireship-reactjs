import React from 'react'
import './SingleTags.scss'

const Tags = props => {
  return (
    <small className='tag'> #{props.children} </small>
  )
}

export default Tags