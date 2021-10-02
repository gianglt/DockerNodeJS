import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// We will create these two pages in a moment
import BookApp from './pages/BookApp'
import DemoComponent from './pages/demo/demoComponents'

export default function App() {
  return (
    <Router>
      <div>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
            <li>
              <Link to="/demo">Demo</Link>
            </li>
          </ul>
        </nav>
      <Switch>
        <Route exact path="/books" component={BookApp} />
        <Route path="/demo" component={DemoComponent} />
      </Switch>
      </div>
    </Router>
  
  )
}