import React from 'react'
import { Link } from 'react-router-dom'

import HomeIcon from './icons/Home'

export default function NavMenu () {
  return (
    <div className="text-left p-4">

      <section className="mb-6 text-center">

        <Link
          to="/"
          className="btn btn-sm btn-white"
        >
          <div className="flex items-center">
            <HomeIcon className="w-4 h-4 mr-2" /> Home
          </div>
        </Link>

      </section>

      <section>

      </section>

      <section>

        <h2 className="text-base border-b border-grey-light mb-3 pb-1">
          Components
        </h2>

        <div className="flex items-center">

          <Link
            to="/alerts"
            className="nav-link"
          >
            Alert
          </Link>

          <div className="bullit" />

          <Link
            to="/buttons"
            className="nav-link"
          >
            Button
          </Link>

          <div className="bullit" />

          <Link
            to="/tabs"
            className="nav-link"
          >
            Tabs
          </Link>

        </div>

      </section>

    </div>
  )
}
