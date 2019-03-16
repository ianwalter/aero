import React, { useState } from 'react'

export default function Tabs () {
  const [currentTab, setTab] = useState('home')
  const isActive = tab => tab === currentTab ? 'active' : ''

  return (
    <div className="container mx-auto mt-12">

      <h1>Tabs</h1>

      <p className="py-4">
        Good ole tabs.
      </p>

      <div className="flex py-4 flex-wrap">

        <div className="example mr-8 mt-8 mb-8">

          <div className="tabs">

            <a
              href="#"
              className={`tab ${isActive('home')}`}
              onClick={() => setTab('home')}
            >
              Home
            </a>

            <a
              href="#"
              className={`tab ${isActive('some')}`}
              onClick={() => setTab('some')}
            >
              Some Page
            </a>

            <a
              href="#"
              className={`tab ${isActive('about')}`}
              onClick={() => setTab('about')}
            >
              About Us
            </a>

            <a
              href="#"
              className={`tab ${isActive('register')}`}
              onClick={() => setTab('register')}
            >
              Register
            </a>

            <a
              href="#"
              className={`tab ${isActive('login')}`}
              onClick={() => setTab('login')}
            >
              Login
            </a>

          </div>

        </div>

      </div>

    </div>
  )
}
