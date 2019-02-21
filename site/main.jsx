import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import SiteHeader from './components/SiteHeader'
import Home from './components/Home'
import Buttons from './components/Button'
import '../index.css'
import './main.css'

const App = hot(() => (
  <Router>
    <React.Fragment>

      <SiteHeader />

      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/buttons" component={Buttons} />
      </main>

    </React.Fragment>
  </Router>
))

ReactDOM.render(<App />, document.getElementById('app'))
