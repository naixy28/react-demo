import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import TodoApp from './components/TodoApp'

/*import Login from './components/LoginComponent';
import {BasicTableComponent,PRODUCTS} from './components/pwc/table/BasicTableComponent';
import {MyTable} from './components/pwc/table/TableComponent';*/

// Render the main component into the dom

/*import { Router, Route, Link } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        {this.props.children || "Welcome to your Inbox"}
      </div>
    )
  }
})

const Message = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})

ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.body)*/

//ReactDOM.render(<Login />, document.getElementById('app'));

/*
ReactDOM.render(<BasicTableComponent products={PRODUCTS} />, document.getElementById('app'));
*/

/** store 数据结构 sample
 {
   visibilityFilter: 'SHOW_ALL',
   todos: [
     {
       text: 'Consider using Redux',
       completed: true,
     },
     {
       text: 'Keep all state in a single tree',
       completed: false
     }
   ]
 }
 */

let store = createStore(todoApp);

store.subscribe(()=>{console.log(store.getState())});

ReactDOM.render(
  <Provider store={store}>
    <TodoApp />
  </Provider>,
  document.getElementById('app'));
