<script lang="ts">
  type Tab = {
    heading: string
    content: string
  }

  export let tabs: Tab[] = [
    {
      heading: 'Tab 1',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum numquam blanditiis harum quisquam eius sed odit fugiat.',
    },
    {
      heading: 'Tab 2',
      content:
        'Blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto.',
    },
    {
      heading: 'Tab 3',
      content:
        'Eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente off.',
    },
  ]

  let tabIndex = 0
</script>

<aside>
  <ul>
    {#each tabs as tab, loopIndex}
      <li
        class:active={loopIndex === tabIndex}
        on:click={() => (tabIndex = loopIndex)}
        on:keypress
      >
        {tab.heading}
      </li>
    {/each}
  </ul>

  <div>{tabs[tabIndex].content}</div>
</aside>

<style>
  aside {
    max-width: 100%;
    box-shadow: var(--shadow);
    background-color: white;
    color: var(--black);
  }
  ul {
    display: flex;
    gap: 0.5rem;
    margin: 0;
    padding: 0;
    background: var(--background, #323232);
    color: white;
  }
  li {
    list-style-type: none;
    padding: 1rem;
    cursor: pointer;
  }
  .active {
    background: var(--color, var(--light));
  }
  div {
    padding: 1rem 1.5rem;
    line-height: 1.4em;
  }
</style>
