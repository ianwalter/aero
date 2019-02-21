import React from 'react'
import { Link } from 'react-router-dom'

export default () => (
  <div className="text-left">

    <section className="mb-3">

      <Link
        to="/"
        class="nav-link hover:text-indigo-dark"
      >
        Home
      </Link>

    </section>

    <section>

      <h2 className="text-base border-b border-grey-light mb-3 pb-1">
        Components
      </h2>

      <Link
        to="/buttons"
        class="nav-link hover:text-indigo-dark"
      >
        Button
      </Link>

    </section>


  </div>
)
