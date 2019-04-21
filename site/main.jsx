import React, { Fragment, lazy, Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { hot } from 'react-hot-loader/root'
import SiteHeader from './components/SiteHeader'

import '../index.css'
import './main.css'

const Home = lazy(() => import('./components/Home'))
const Alert = lazy(() => import('./components/Alert'))
const Button = lazy(() => import('./components/Button'))
const Tabs = lazy(() => import('./components/Tabs'))

const App = hot(() => (
  <Router>
    <Fragment>

      <SiteHeader />

      <main>
        <Suspense fallback={<div/>}>
          <Route exact path="/" component={Home} />
          <Route exact path="/alerts" component={Alert} />
          <Route exact path="/buttons" component={Button} />
          <Route exact path="/tabs" component={Tabs} />
        </Suspense>
      </main>

    </Fragment>
  </Router>
))

ReactDOM.render(<App />, document.getElementById('app'))
