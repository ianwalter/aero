import React from 'react'

export default function Alert () {
  return (
    <div className="container mx-auto mt-12">

      <h1>Alerts</h1>

      <p className="py-4">
        Good ole alerts.
      </p>

      <div className="flex py-4 flex-wrap">

        <div className="example mr-8 mt-8 mb-8">

          <div class="alert alert-info">
            <strong>Hey hey!</strong> Here is some info to read.
          </div>

        </div>

        <div className="example mr-8 mt-8 mb-8">

          <div class="alert alert-success">
            <strong>Success!</strong> You have seen this alert.
          </div>

        </div>

        <div className="example mr-8 mt-8 mb-8">

          <div class="alert alert-warning">
            <strong>Warning!</strong> You are reading an alert.
          </div>

        </div>

        <div className="example mr-8 mt-8 mb-8">

          <div class="alert alert-danger">
            <strong>Error!</strong> Something is not quite right.
          </div>

        </div>

      </div>

    </div>
  )
}
