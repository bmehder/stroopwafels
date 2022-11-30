<script>
  const date = new Date().getFullYear()
</script>

<footer>
  <div><slot>© Copyright {date} Stroopwafels. All rights reserved.</slot></div>
</footer>

<style>
  footer {
    background-color: var(--background, var(--black));
    color: var(--color, var(--white));
  }
  div {
    max-width: var(--width, 1100px);
    margin-inline: auto;
    padding-block: var(--padding, var(--spacing));
    padding-inline: var(--spacing);
  }
</style>
