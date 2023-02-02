import { navLinks } from '../../data/index'
import Image from 'next/image'
import React, { useState } from 'react'
import NavItem from './NavItem'
import clsx from 'clsx'
import { MobileNavItem } from './MobileNavItem'

export const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <section id="header">
      <div className="flex flex-col justify-center px-6 py-12 text-white bg-slate-700">
        {/* Menu / Logo container */}
        <nav className="flex items-center justify-between font-bold text-wide">
          {/* Logo */}
          <Image
            src="/images/logo.svg"
            alt="logo"
            height={0}
            width={0}
            className="w-auto h-auto"
          />

          {/* Menu */}
          <div className="hidden h-10 font-alata md:flex md:space-x-8">
            {(navLinks || []).map((item, id) => (
              <NavItem key={id} {...item} />
            ))}
          </div>
          <div className="md:hidden">
            <button
              id="menu-btn"
              type="button"
              onClick={() => setOpen(!open)}
              className={clsx(
                'hamburger z-40 block focus:outline-none md:hidden',
                open ? 'open' : ''
              )}
            >
              <span className="hamburger-top"></span>
              <span className="hamburger-middle"></span>
              <span className="hamburger-bottom"></span>
            </button>
          </div>
        </nav>

        <div
          id="menu"
          className={clsx(
            'absolute top-0 bottom-0 left-0 flex min-h-screen w-full flex-col space-y-3 self-end bg-slate-700 py-1 pt-40 pl-12 text-lg uppercase text-white',
            open ? '' : 'hidden'
          )}
        >
          {(navLinks || []).map((item, id) => (
            <MobileNavItem key={id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
