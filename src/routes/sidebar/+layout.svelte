<script>
  import Sveltetube from '$lib/Sveltetube.svelte'
</script>

<h1 class="section">Sidebar</h1>

<div class="grid sidebar">
  <slot />

  <aside class="auto-format">
    <div>
      <h2>Heading 1</h2>
      <Sveltetube />
    </div>
    <div>
      <h2>Heading 1</h2>
      <Sveltetube />
    </div>
    <div>
      <h2>Heading 1</h2>
      <Sveltetube />
    </div>
  </aside>
</div>

<style>
  .sidebar {
    gap: calc(var(--spacing) * 2);
    align-items: start;
  }
  aside {
    padding-block: calc(var(--spacing) * 2);
    padding-inline: var(--spacing);
    background-color: var(--light);
    color: var(--white);
  }
  @media (min-width: 769px) {
    .sidebar {
      grid-template-columns: 2fr 1fr;
      max-width: 1100px;
      margin-inline: auto;
    }
  }
</style>
