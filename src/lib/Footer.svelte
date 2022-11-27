<script>
  const date = new Date().getFullYear()
</script>

<footer>
  <div><slot>© Copyright {date} Stroopwafels. All rights reserved.</slot></div>
</footer>

<style>
  footer {
    background-color: var(--background, #323232);
    color: var(--color, white);
  }
  div {
    max-width: var(--width, 1100px);
    margin-inline: auto;
    padding-block: var(--padding, 1.5rem);
    padding-inline: 2rem;
  }
  @media (min-width: 1100px) {
    div {
      padding-inline: 0;
    }
  }
</style>
