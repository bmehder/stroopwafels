# Stroopwafels Component Library

A collection of Svelte components

## Components

- **SvelteTube**: a lazy loading, responsive Youtube video player. Props include a YouTube video id, poster image title attribute, play icon color, poster image, border-radius, and box-shadow.
- **Prism**: syntax highlighting for code snippets with a copy button. Props include the code to be displayed.
- **Slider**: A progressively enhanced Slider using scroll-snap. JS allows the user to play/pause using the letter "p" or with the icon, use the left and right arrows (or left and right buttons) to change slides, and autoplay. Props include the slides/text/position, duration, color, and isAutoplay.
- **Tabs**: A component for grouping content in to tabs. Props include an array of tabs with heading/content.
- **Header**: A responsive Header with dropdown items. Props include an array of menu items with name/url/children, and a logo (text or html).
- **Footer**: A reponsive Footer with a default slot.
- **DarkMode**: An icon to toggle between dark mode and light mode. Uses localStorage to persist the selection. When dark mode is selected, a class of _.dark_ will be added to the body element.
- **BackToTop**: An icon that will scroll the user to the top of the page when clicked.
- **Viewport action**: an action that can be added to a DOM element. The action will return two custom events: onEnterViewport and onExitViewport.
- **ClickOutside action**: an action that will listen for a click on any element except the element the action was applied to. Useful for things like closing a modal by clicking outside of the modal.

Note: some components accept custom property values. More details coming soon.

# Demo

[https://stroopwafels-demo.vercel.app/](https://stroopwafels-demo.vercel.app/)

# stroopwafels
