import React from 'react'
import Tippy from '@tippy.js/react'
import NavMenu from './NavMenu'

export default function SiteHeader () {
  return (
    <header className="bg-grey-lighter h-16 pt-5 text-center font-semibold border-b border-grey-light">
      <Tippy
        content={<NavMenu />}
        interactive={true}
        arrow={true}
        animation="perspective"
        size="large"
        theme="light-border"
      >
        <span className="cursor-pointer text-xl">aero</span>
      </Tippy>
    </header>
  )
}
