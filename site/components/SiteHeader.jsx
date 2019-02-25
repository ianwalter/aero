import React from 'react'
import Tippy from '@tippy.js/react'
import 'tippy.js/themes/light-border.css'
import NavMenu from './NavMenu'

export default function SiteHeader () {
  return (
    <header className="bg-grey-lighter h-12 pt-4 text-center font-semibold border-b border-grey-light">
      <Tippy
        content={<NavMenu />}
        interactive={true}
        arrow={true}
        animation="perspective"
        size="large"
        theme="light-border"
      >
        <span className="cursor-pointer">aero</span>
      </Tippy>
    </header>
  )
}
