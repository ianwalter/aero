import React from 'react'

export default () => (
  <div className="container mx-auto mt-12">

    <h1>Buttons</h1>

    <p className="py-4">
      Ahh buttons.
    </p>

    <div className="flex py-4">

      <div className="example mr-8 mt-8 mb-8">

        <a
          href="#"
          className="btn btn-indigo"
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
