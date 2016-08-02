/**
 * Created by ryuan018 on 8/1/2016.
 */
import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text ,onDeleteClick }) => (
  <li>
    <span onClick={onClick}
          style={{
    textDecoration: completed ? 'line-through' : 'none'
    }}>{text}</span>
    <span onClick={onDeleteClick}
          style={{
          color: 'red'
          }}
    >  delete</span>
  </li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo
