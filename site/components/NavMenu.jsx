import React from 'react'
import { Link } from 'react-router-dom'

export default function NavMenu () {
  return (
    <div className="text-left">

      <section className="mb-3">

        <Link
          to="/"
          className="nav-link uppercase"
        >
          Home
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
            to="/buttons"
            className="nav-link"
          >
            Button
          </Link>

          <div className="bullit" />

          <Link
            to="/alerts"
            className="nav-link"
          >
            Alert
          </Link>

        </div>

      </section>

    </div>
  )
}
