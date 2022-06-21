import React from 'react'
import { Story, Meta } from '@storybook/react'

import Navbar, { NavbarProps } from '.'
import Button from '../Button'

export default {
  title: 'Navigation/Navbar',
  component: Navbar,
} as Meta

export const Default: Story<NavbarProps> = (args) => {
  return (
    <Navbar {...args}>
      <Navbar.Start className="px-2 mx-2">
        <svg
          className="block sm:hidden mr-2 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 512 512"
        >
          <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
        </svg>
        <span className="text-lg font-bold">daisyUI</span>
      </Navbar.Start>

      <Navbar.Center className="px-2 mx-2">
        <div className="hidden sm:flex items-stretch">
          <Button size="sm">Home</Button>
          <Button size="sm">Portfolio</Button>
          <Button size="sm">About</Button>
          <Button size="sm">Contact</Button>
        </div>
      </Navbar.Center>

      <Navbar.End className="px-2 mx-2">
        <Button shape="square" color="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
        </Button>
        <Button shape="square" color="ghost">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-6 h-6 stroke-current"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </Button>
      </Navbar.End>
    </Navbar>
  )
}
Default.args = {
  className: 'shadow-lg bg-neutral text-neutral-content rounded-box',
}
