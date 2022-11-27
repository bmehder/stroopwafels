<script lang="ts">
  import Slider from '$lib/Slider/Slider.svelte'
  import Sveltetube from '$lib/Sveltetube.svelte'
  import Prism from '$lib/Prism/Prism.svelte'
  import { viewport } from '$lib/viewport'
  import BackToTop from '$lib/BackToTop.svelte'
  import Header from '$lib/Header/Header.svelte'
  import Footer from '$lib/Footer.svelte'
</script>

<Header --background="#323232" --color="white" --width="1100px" logo="My Logo" />

<div>
  <Slider color="white" />
</div>

<section>
  <h2>SvelteTube</h2>
  <Sveltetube
    id="XSK1Bt9O0Pw"
    title="Sondre Lerche - Alone In The Night (feat. AURORA)"
    color="rgba(255,255,255,0.85)"
    radius="1rem"
    shadow="0 10px 20px rgba(0,0,0,0.24)"
  />
</section>

<section>
  <Sveltetube
    id="aXOChLn5ZdQ"
    title="JavaScript for the Haters"
    color="rgba(255,255,255,0.85)"
    radius="1rem"
    shadow="0 10px 20px rgba(0,0,0,0.24)"
  />
</section>

<section>
  <h2>Prism</h2>
  <Prism code="const enterDesignMode = () => document.designMode = 'on'" />

  <div
    use:viewport={{}}
    on:enterViewport={() => console.log('Enter viewport')}
    on:exitViewport={() => console.log('Exit viewport')}
  >
    <Prism
      code={`
  // TypeScript
  import type { RequestEvent } from '@sveltejs/kit'
  import type { WP_REST_API_Posts } from 'wp-types'
  
  /** @type {import('./$types').PageLoad} */
  export async function load({ fetch }: RequestEvent) {
    const BASE_URL = 'https://example.com/wp-json/wp/v2/'

    const response = await fetch(BASE_URL + 'posts')
    const posts: WP_REST_API_Posts = await response.json()

    return { posts }
  }`}
    />
  </div>
</section>

<BackToTop />

<Footer --padding="2rem" />

<style>
  section {
    max-width: 800px;
    margin-block: 2rem;
    margin-inline: auto;
  }
</style>
