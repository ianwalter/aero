import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import SiteHeader from './components/SiteHeader'
import Home from './components/Home'
import Button from './components/Button'
import Alert from './components/Alert'
import '../index.css'
import './main.css'

const App = hot(() => (
  <Router>
    <React.Fragment>

      <SiteHeader />

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/buttons" component={Button} />
        <Route exact path="/alerts" component={Alert} />
      </main>

    </React.Fragment>
  </Router>
))

ReactDOM.render(<App />, document.getElementById('app'))
