/**
 * Created by ryuan018 on 8/1/2016.
 */
import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'

const todoApp = combineReducers({
  todos,
  visibilityFilter
});

export default todoApp;
