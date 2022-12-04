<script lang="ts">
  import Sveltetube from '$lib/Sveltetube.svelte'
  import Prism from '$lib/Prism/Prism.svelte'
</script>

<main>
  <section>
    <div>
      <h2>SvelteTube</h2>
      <div class="grid auto">
        <Sveltetube
          id="XSK1Bt9O0Pw"
          title="Sondre Lerche - Alone In The Night (feat. AURORA)"
          color="rgba(255,255,255,0.85)"
          radius="1rem"
          shadow="0 10px 20px rgba(0,0,0,0.24)"
        />
        <Sveltetube
          id="aXOChLn5ZdQ"
          title="JavaScript for the Haters"
          color="rgba(255,255,255,0.85)"
          radius="1rem"
          shadow="0 10px 20px rgba(0,0,0,0.24)"
        />
      </div>
    </div>
  </section>

  <section>
    <div>
      <h2>Prism</h2>
      <Prism code="const enterDesignMode = () => document.designMode = 'on'" />
      <div>
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
    </div>
  </section>
</main>

<style>
  :global(.modal-background, .modal) {
    margin-top: 0;
  }
</style>
