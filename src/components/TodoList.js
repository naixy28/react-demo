/**
 * Created by ryuan018 on 8/1/2016.
 */
import React , { PropTypes } from 'react'
import Todo from  './Todo'

const TodoList = ({ todos, onTodoClick ,onDeleteTodoClick}) => (
  <ul>
    {todos.map(todo=>
      <Todo
        key = {todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        onDeleteClick={() => onDeleteTodoClick(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList
