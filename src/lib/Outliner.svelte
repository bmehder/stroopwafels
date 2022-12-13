<script lang="ts">
  let isOn = false

  const handleClick = () => (isOn = !isOn)
</script>

<span class:isOn on:click={handleClick} on:keypress={handleClick}
  >{isOn ? 'Off' : 'On'}</span
>

<style>
  :global(body:has(.isOn) *) {
    outline: 1px solid var(--background, tomato) !important;
  }
  span {
    position: fixed;
    top: 0;
    left: 0;
    padding-block: calc(var(--spacing) / 2);
    padding-inline: var(--spacing);
    background-color: var(--background, tomato);
    color: var(--color, white);
    opacity: 0;
    transition: opacity 100ms ease-in-out;
    cursor: pointer;
  }
  span:hover {
    opacity: 1;
  }
</style>
