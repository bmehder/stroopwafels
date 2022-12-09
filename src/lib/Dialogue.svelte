<script lang="ts">
  export let messages = [
    {
      src: 'https://www.w3schools.com/w3images/bandmember.jpg',
      message: 'Hello. How are you today?',
      time: '11:00',
    },
    {
      src: 'https://www.w3schools.com/w3images/avatar_g2.jpg',
      message: "Hey! I'm fine. Thanks for asking!",
      time: '11:01',
    },
    {
      src: 'https://www.w3schools.com/w3images/bandmember.jpg',
      message: 'Sweet! So, what do you wanna do today?',
      time: '11:02',
    },
    {
      src: 'https://www.w3schools.com/w3images/avatar_g2.jpg',
      message: 'Uh, I dunno. Play footy... or learn more coding perhaps?',
      time: '11:05',
    },
  ]
</script>

<aside>
  {#each messages as { src, message, time }}
    <div class="container">
      <div>
        <img {src} alt="Avatar" />
        <p>{message}</p>
      </div>
      <span>{time}</span>
    </div>
  {/each}
</aside>

<style>
  aside {
    max-width: 768px;
    display: flex;
    flex-direction: column;
    padding: var(--spacing);
    border-radius: 2rem;
    border: 1.5rem solid black;
    border-top-width: calc(var(--spacing) * 3);
    border-bottom-width: calc(var(--spacing) * 5);
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8), var(--black));
    box-shadow: inset 0 10px 20px rgba(255, 255, 255, 0.1);
  }
  .container {
    max-width: 66%;
    align-self: start;
    margin-block: var(--spacing);
    padding: var(--spacing);
    background-color: var(--light);
    color: var(--white);
    line-height: var(--spacing);
    border-radius: calc(var(--radius) * 8);
    box-shadow: var(--shadow);
  }
  .container > div {
    display: flex;
    justify-content: space-between;
    align-items: start;
    gap: var(--spacing);
  }
  .container:nth-child(even) {
    background-color: var(--dark);
    align-self: end;
  }
  span {
    padding-inline: calc((var(--spacing) / 2) - 0.5rem);
  }
  .container:nth-child(even) span {
    display: inherit;
    color: var(--white);
    text-align: right;
  }
  img {
    max-width: calc(var(--spacing) * 2);
    margin-block-end: calc(var(--spacing) / 2);
    width: 100%;
    border-radius: 50%;
  }
  .container:nth-child(even) img {
    order: 2;
  }
</style>
