import React from 'react'

export default function Button () {
  return (
    <div className="container mx-auto mt-12">

      <h1>Buttons</h1>

      <p className="py-4">
        Elements that users click or touch to perform an action.
      </p>

      <div className="flex flex-wrap justify-around py-4">

        <div className="example my-8">

          <a
            href="#"
            className="btn btn-blue"
          >
            Anchor btn-indigo
          </a>

        </div>

        <div className="example my-8">

          <button
            className="btn btn-indigo"
          >
            Button btn-indigo
          </button>

        </div>

        <div className="example my-8">

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
