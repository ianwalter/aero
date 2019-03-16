import React from 'react'

export default function Alert () {
  return (
    <div className="container mx-auto mt-12">

      <h1>Alerts</h1>

      <p className="py-4">
        Good ole alerts.
      </p>

      <div className="flex py-4">

        <div className="example mr-8 mt-8 mb-8">

          <a
            href="#"
            className="btn btn-blue"
          >
            Anchor btn-indigo
          </a>

        </div>

        <div className="example m-8">

          <button
            className="btn btn-indigo"
          >
            Button btn-indigo
          </button>

        </div>

        <div className="example ml-8 mt-8 mb-8">

          <button
            className="btn btn-white"
          >
            Button btn-white
          </button>

        </div>

      </div>

    </div>
  )
}
