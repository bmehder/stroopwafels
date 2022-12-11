<script lang="ts">
  import { viewport } from '../viewport'
  import { isOpen, isShowBackToTop } from '../store'

  import Nav from './Nav.svelte'
  import Hamburger from './Hamburger.svelte'

  type Items = { name: string; url?: string; target?: string; children?: Items }[]

  export let items: Items = [
    { name: 'Home', url: '/' },
    {
      name: 'About',
      url: '/about',
      children: [
        { name: 'Team', url: '/team' },
        { name: 'Careers', url: '/careers' },
      ],
    },
    {
      name: 'NPM',
      url: 'https://www.npmjs.com/package/stroopwafels',
      target: '_blank',
    },
    {
      name: 'Sidebar',
      url: '/sidebar',
    },
  ]
  export let logo: string = 'Logo'

  const BREAKPOINT = 768

  let innerWidth: number

  const closeNav = () => ($isOpen = false)
  const toggleNav = () => ($isOpen = !$isOpen)

  $: innerWidth > BREAKPOINT && closeNav()
</script>

<svelte:window bind:innerWidth />

<header
  class:isOpen={$isOpen}
  use:viewport={{ rootMargin: '100%' }}
  on:enterViewport={() => ($isShowBackToTop = false)}
  on:exitViewport={() => ($isShowBackToTop = true)}
>
  <div>
    <Nav on:click={closeNav} {items} {logo} />
    <Hamburger on:click={toggleNav} />
  </div>
</header>

<style>
  header {
    padding-block: var(--padding, 1.5rem);
    background-color: var(--background, var(--black));
    color: var(--color);
  }
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--width, 100%);
    margin-inline: auto;
    padding-inline: var(--padding, 1.5rem);
  }
  .isOpen {
    position: absolute;
    width: 100%;
    height: 100%;
    min-height: 100vh;
    z-index: 10;
  }
  .isOpen div {
    align-items: unset;
  }
</style>
