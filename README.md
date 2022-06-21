# mintflow-react

DaisyUI components built with React, Typescript and TailwindCSS.

📖 Check out the <a href="">Storybook</a>

---

## 💿 Install

Make sure you've installed <a href="https://tailwindcss.com/docs/installation">TailwindCSS</a> and <a href="https://daisyui.com/docs/install/">daisyUI</a>.

Install the package with npm or yarn:

```bash
npm install mintflow-react
```

To prevent TailwindCSS from purging your styles, add the following line to your tailwind.config.js:

```js
module.exports = {
  content: [],
  safelist: [
    {
      pattern: /./
    },
  ],
  ...
  plugins: [require("daisyui")],
}
```

## ⚡ Quick Start

Import mintflow-react components within your component files:

```js
import { Button } from 'mintflow-react'

export default (props) => {
  return <Button color="primary">Click me!</Button>
}
```

## 🎨 Themes

To apply a theme (or multiple themes) to a page or components, import the Theme component and wrap your content:

```js
import { Theme, Button } from 'mintflow-react'

export default (props) => {
  return (
    <>
      <Theme dataTheme="dark">
        <Button color="primary">Click me, dark!</Button>
      </Theme>

      <Theme dataTheme="light">
        <Button color="primary">Click me, light!</Button>
      </Theme>
    </>
  )
}
```
---

## ⚙️ Components

<details>
<summary>Actions:</summary>
  
- [x] <a href="https://react.daisyui.com/?path=/story/actions-button">Button</a>
- [X] <a href="https://react.daisyui.com/?path=/story/actions-dropdown">Dropdown</a>
- [X] <a href="https://react.daisyui.com/?path=/story/actions-modal">Modal</a>
- [X] <a href="https://react.daisyui.com/?path=/story/actions-swap">Swap</a>
</details>

<details>
<summary>Data Display:</summary>
  
- [x] <a href="https://react.daisyui.com/?path=/story/data-display-alert">Alert</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-avatar">Avatar</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-badge">Badge</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-card">Card</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-carousel">Carousel</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-collapse">Collapse</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-countdown">Countdown</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-kbd">Kbd</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-progress">Progress</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-radial-progress">Radial Progress</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-stats">Stats</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-table">Table</a>
- [X] <a href="https://react.daisyui.com/?path=/story/data-display-tooltip">Tooltip</a>
</details>

<details>
<summary>Data Input:</summary>

- [x] <a href="https://react.daisyui.com/?path=/story/data-input-checkbox">Checkbox</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-input">Input</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-radio">Radio</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-range">Range</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-rating">Rating</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-select">Select</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-textarea">Textarea</a>
- [x] <a href="https://react.daisyui.com/?path=/story/data-input-toggle">Toggle</a>
</details>

<details>
<summary>Layout:</summary>

- [x] <a href="https://react.daisyui.com/?path=/story/layout-artboard">Artboard</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-buttongroup">Button-Group</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-divider">Divider</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-drawer">Drawer</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-footer">Footer</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-hero">Hero</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-indicator">Indicator</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-inputgroup">Input Group</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-mask">Mask</a>
- [x] <a href="https://react.daisyui.com/?path=/story/layout-stack">Stack</a>
</details>

<details>
<summary>Navigation:</summary>

- [x] <a href="https://react.daisyui.com/?path=/story/navigation-breadcrumbs">Breadcrumbs</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-link">Link</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-menu">Menu</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-navbar">Navbar</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-pagination">Pagination</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-steps">Steps</a>
- [x] <a href="https://react.daisyui.com/?path=/story/navigation-tabs">Tabs</a>
</details>

<details>

## 🤝 Contributing

Pleas share any issues, or improvments of the library as a PR. Also feel free to request new components or add them in by yourself

### Creating new components

Run `npm run generate component ${your_new_component_name}`. The generator will ask a few questions and setup the component for you.

When you'e done, export the component from `index.tsx` and open a PR.

---

### License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/simonweniger/mintflow-react/blob/main/LICENSE) file for details.
