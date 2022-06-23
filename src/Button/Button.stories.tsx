import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button, { ButtonProps } from '.'

export default {
  title: 'Actions/Button',
  component: Button,
  argTypes: {
    startIcon: {
      control: false,
    },
    endIcon: {
      control: false,
    },
  },
} as Meta

export const Default: Story<ButtonProps> = (args) => {
  return (
    <div>
      <div className='flex space-x-4'>
        <Button variant='primary'>Primary Button</Button>
        <Button variant="secondary">
          Secondary Button
        </Button>
        <Button variant="warning">
          Warning Button
        </Button>
        <Button variant="nav">
          Nav Item
        </Button>
      </div>
    </div>
  )
}

export const Size: Story<ButtonProps> = (args) => {
  return (
    <div>
      <div className='flex space-x-4 items-center'>
        <Button variant='primary' size='lg'>Large Size</Button>
        <Button variant='primary'>Default Size</Button>
        <Button variant='primary' size='sm'>Small Size</Button>
      </div>
    </div>
  )
}

export const Disabled: Story<ButtonProps> = (args) => {
  return (
    <div>
      <div className='flex space-x-4'>
        <Button variant='primary' disabled={true}>Primary Button</Button>
        <Button variant="secondary" disabled={true}>
          Secondary Button
        </Button>
        <Button variant="warning" disabled={true}>
          Warning Button
        </Button>
        <Button variant="nav" disabled={true}>
          Nav Item
        </Button>
      </div>
    </div>
  )
}


export const Icons: Story<ButtonProps> = (args) => {
  const favoriteIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
      />
    </svg>
  )

  return (
    <div className="flex gap-x-2">
      <Button  startIcon={favoriteIcon}>
        Icon at Start
      </Button>
      <Button endIcon={favoriteIcon}>
        Icon at End
      </Button>
      <Button onlyIcon={favoriteIcon}>
      </Button>
    </div>
  )
}

export const AsHref: Story<ButtonProps> = (args) => {
  return (
    <div className="flex gap-x-2">
      <Button
        {...args}
        onClick={() => alert('See, I have an onClick event and no href.')}
      >
        I'm a {`<button>`}
      </Button>
      <Button href="https://google.com">I'm an {`<a>`}</Button>
    </div>
  )
}
