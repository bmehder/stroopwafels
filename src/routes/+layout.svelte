<script>
  import '$lib/app.css'
  import BackToTop from '$lib/BackToTop.svelte'
  import Footer from '$lib/Footer.svelte'
  import Header from '$lib/Header/Header.svelte'
</script>

<Header --background="#323232" --color="white" --width="1100px" logo="My Logo" />

<slot />

<Footer --padding="3rem" />

<BackToTop --background="var(--light)" />
