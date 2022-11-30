<script lang="ts">
  import { isOpen } from '../store'

  import DarkMode from '../DarkMode.svelte'

  type Items = { name: string; url?: string; children?: Items }[]

  export let items: Items
  export let logo: string = 'Logo'

  const handleClick = async () => {
    $isOpen = false
  }
</script>

<nav class:isOpen={$isOpen}>
  <h1><a on:click={handleClick} href="/">{@html logo}</a></h1>
  <ul>
    {#each items as item}
      <li>
        <a on:click={handleClick} href={item.url}>{@html item.name}</a>
        {#if item.children}
          <ul>
            {#each item.children as childItem}
              <li>
                <a on:click={handleClick} href={childItem.url}
                  >{@html childItem.name}</a
                >
              </li>
            {/each}
          </ul>
        {/if}
      </li>
    {/each}
    <li on:click={handleClick} on:keypress><DarkMode --width="1.5rem" /></li>
  </ul>
</nav>

<style>
  h1 {
    margin: 0;
    margin-right: auto;
  }
  nav {
    width: 100%;
    display: flex;
    align-items: center;
  }
  nav h1 a:hover {
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
    gap: 2rem;
    margin: 0;
    padding-inline: 0;
  }
  li {
    position: relative;
    color: white;
  }
  li:hover ul {
    display: block;
  }
  ul ul {
    display: none;
    position: absolute;
    flex-direction: column;
    gap: 1.5rem;
    margin-left: -1.5rem;
    padding-block: 1rem;
    padding-inline: 1.5rem;
    background-color: #323232;
    z-index: 1;
  }
  ul ul li {
    padding-bottom: 1rem;
  }
  ul ul li:last-of-type {
    padding-bottom: 0.5rem;
  }
  a {
    cursor: pointer;
    color: white;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    nav {
      flex-direction: column;
      gap: 3rem;
    }
    ul {
      display: none;
    }
    .isOpen ul {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .isOpen li {
      padding-bottom: 1rem;
      border-bottom: 2px solid white;
    }
    ul ul {
      display: none !important;
      position: relative;
      gap: 1rem;
      margin-left: 0.25rem;
      padding-bottom: 0;
    }
    .isOpen ul ul li {
      border-bottom: none;
    }
  }
</style>
