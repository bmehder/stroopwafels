<script>
  import '$lib/app.css'
  import { page } from '$app/stores'
  import Slider from '$lib/Slider/Slider.svelte'
  import Header from '$lib/Header/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'
</script>

<div class="wrapper">
  <Header --background="white" --color="black" --width="1100px" logo="My Logo" />

  {#if $page.route.id === '/'}
    <Slider />
  {/if}

  <main>
    <slot />
  </main>

  <Footer --padding="3rem" />
</div>

<BackToTop --background="var(--light)" />
