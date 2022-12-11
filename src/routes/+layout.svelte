<script>
  import '$lib/base.css'
  import { page } from '$app/stores'
  import Slider from '$lib/Slider/Slider.svelte'
  import Header from '$lib/Header/Header.svelte'
  import Footer from '$lib/Footer.svelte'
  import BackToTop from '$lib/BackToTop.svelte'
  import Outliner from '$lib/Outliner.svelte'
</script>

<Outliner />

<div class="wrapper">
  <Header --background="white" --color="black" --width="1100px" logo="My Logo" />

  {#if $page.route.id === '/'}
    <Slider isAutoplay={true} />
  {/if}

  <main>
    <slot />
  </main>

  <Footer --padding="3rem" />
</div>

<BackToTop --background="var(--light)" />
