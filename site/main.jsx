import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import SiteHeader from './components/SiteHeader'
import Home from './components/Home'
import Alert from './components/Alert'
import Button from './components/Button'
import Tabs from './components/Tabs'
import '../index.css'
import './main.css'

const App = hot(() => (
  <Router>
    <React.Fragment>

      <SiteHeader />

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/alerts" component={Alert} />
        <Route exact path="/buttons" component={Button} />
        <Route exact path="/tabs" component={Tabs} />
      </main>

    </React.Fragment>
  </Router>
))

ReactDOM.render(<App />, document.getElementById('app'))
