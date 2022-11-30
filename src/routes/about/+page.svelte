<script lang="ts">
  let isOutline: boolean
  let isBackground: boolean

  const handleOutline = () => (isOutline = !isOutline)
  const handleBackground = () => (isBackground = !isBackground)
</script>

<aside>
  <button on:click={handleOutline}>Background</button>
  <button on:click={handleBackground}>Outline</button>
</aside>

<main class:isOutline class:isBackground>
  <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h1>

  <h2>Tempora nisi dolores doloremque</h2>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi dolores
    doloremque iure assumenda tenetur nobis eligendi velit corporis. Esse voluptatem
    delectus repudiandae dolor facere, quaerat temporibus recusandae eligendi animi
    ipsa ea. Eos neque at <a href="">reiciendis</a> dolore voluptatibus dicta ipsam quia
    beatae suscipit in deleniti, facilis quo doloribus esse itaque rem nam, aspernatur,
    ut molestiae possimus ducimus laboriosam. Numquam voluptas error distinctio eum officia
    alias qui tempore eveniet quibusdam obcaecati? Quae voluptates soluta assumenda animi
    ullam tempora alias voluptatum. Cumque aliquid, velit sit quos a dolores repellat
    earum saepe accusantium non reprehenderit, molestias culpa, debitis tempora facilis
    impedit excepturi unde.
  </p>
  <ul>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
  </ul>

  <div class="grid columns">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi dolores
      doloremque iure assumenda tenetur nobis eligendi velit corporis. Esse
      voluptatem delectus repudiandae dolor facere, quaerat temporibus recusandae
      eligendi animi ipsa ea. Eos neque at reiciendis dolore voluptatibus dicta ipsam
      quia beatae suscipit in deleniti, facilis quo doloribus esse itaque rem nam,
      aspernatur, ut molestiae possimus ducimus laboriosam. Numquam voluptas error
      distinctio eum officia alias qui tempore eveniet quibusdam obcaecati? Quae
      voluptates soluta assumenda animi ullam tempora alias voluptatum. Cumque
      aliquid, velit sit quos a dolores repellat earum saepe accusantium non
      reprehenderit, molestias culpa, debitis tempora facilis impedit excepturi unde.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi dolores
      doloremque iure assumenda tenetur nobis eligendi velit corporis. Esse
      voluptatem delectus repudiandae dolor facere, quaerat temporibus recusandae
      eligendi animi ipsa ea. Eos neque at reiciendis dolore voluptatibus dicta ipsam
      quia beatae suscipit in deleniti, facilis quo doloribus esse itaque rem nam,
      aspernatur, ut molestiae possimus ducimus laboriosam. Numquam voluptas error
      distinctio eum officia alias qui tempore eveniet quibusdam obcaecati? Quae
      voluptates soluta assumenda animi ullam tempora alias voluptatum. Cumque
      aliquid, velit sit quos a dolores repellat earum saepe accusantium non
      reprehenderit, molestias culpa, debitis tempora facilis impedit excepturi unde.
    </p>
  </div>

  <div class="grid columns">
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi dolores
      doloremque iure assumenda tenetur nobis eligendi velit corporis. Esse
      voluptatem delectus repudiandae dolor facere, quaerat temporibus recusandae
      eligendi animi ipsa ea. Eos neque at reiciendis dolore voluptatibus dicta ipsam
      quia beatae suscipit in deleniti, facilis quo doloribus esse itaque rem nam,
      aspernatur, ut molestiae possimus ducimus laboriosam. Numquam voluptas error
      distinctio eum officia alias qui tempore eveniet quibusdam obcaecati? Quae
      voluptates soluta assumenda animi ullam tempora alias voluptatum. Cumque
      aliquid, velit sit quos a dolores repellat earum saepe accusantium non
      reprehenderit, molestias culpa, debitis tempora facilis impedit excepturi unde.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi dolores
      doloremque iure assumenda tenetur nobis eligendi velit corporis. Esse
      voluptatem delectus repudiandae dolor facere, quaerat temporibus recusandae
      eligendi animi ipsa ea. Eos neque at reiciendis dolore voluptatibus dicta ipsam
      quia beatae suscipit in deleniti, facilis quo doloribus esse itaque rem nam,
      aspernatur, ut molestiae possimus ducimus laboriosam. Numquam voluptas error
      distinctio eum officia alias qui tempore eveniet quibusdam obcaecati? Quae
      voluptates soluta assumenda animi ullam tempora alias voluptatum. Cumque
      aliquid, velit sit quos a dolores repellat earum saepe accusantium non
      reprehenderit, molestias culpa, debitis tempora facilis impedit excepturi unde.
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi dolores
      doloremque iure assumenda tenetur nobis eligendi velit corporis. Esse
      voluptatem delectus repudiandae dolor facere, quaerat temporibus recusandae
      eligendi animi ipsa ea. Eos neque at reiciendis dolore voluptatibus dicta ipsam
      quia beatae suscipit in deleniti, facilis quo doloribus esse itaque rem nam,
      aspernatur, ut molestiae possimus ducimus laboriosam. Numquam voluptas error
      distinctio eum officia alias qui tempore eveniet quibusdam obcaecati? Quae
      voluptates soluta assumenda animi ullam tempora alias voluptatum. Cumque
      aliquid, velit sit quos a dolores repellat earum saepe accusantium non
      reprehenderit, molestias culpa, debitis tempora facilis impedit excepturi unde.
    </p>
  </div>

  <h3>Secondary Heading</h3>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi dolores
    doloremque iure assumenda tenetur nobis eligendi velit corporis. Esse voluptatem
    delectus repudiandae dolor facere, quaerat temporibus recusandae eligendi animi
    ipsa ea. Eos neque at reiciendis dolore voluptatibus dicta ipsam quia beatae
    suscipit in deleniti, facilis quo doloribus esse itaque rem nam, aspernatur, ut
    molestiae possimus ducimus laboriosam. Numquam voluptas error distinctio eum
    officia alias qui tempore eveniet quibusdam obcaecati? Quae voluptates soluta
    assumenda animi ullam tempora alias voluptatum. Cumque aliquid, velit sit quos a
    dolores repellat earum saepe accusantium non reprehenderit, molestias culpa,
    debitis tempora facilis impedit excepturi unde.
  </p>

  <blockquote>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam sequi veniam eum
    praesentium harum ad maxime quod ipsam officiis nisi, ab iusto autem atque
    sapiente obcaecati ex repellat tempore velit similique. Iste!
  </blockquote>

  <h2>Subheading</h2>

  <h3>Secondary Heading</h3>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi dolores
    doloremque iure assumenda tenetur nobis eligendi velit corporis. Esse voluptatem
    delectus repudiandae dolor facere, quaerat temporibus recusandae eligendi animi
    ipsa ea. Eos neque at reiciendis dolore voluptatibus dicta ipsam quia beatae
    suscipit in deleniti, facilis quo doloribus esse itaque rem nam, aspernatur, ut
    molestiae possimus ducimus laboriosam. Numquam voluptas error distinctio eum
    officia alias qui tempore eveniet quibusdam obcaecati? Quae voluptates soluta
    assumenda animi ullam tempora alias voluptatum. Cumque aliquid, velit sit quos a
    dolores repellat earum saepe accusantium non reprehenderit, molestias culpa,
    debitis tempora facilis impedit excepturi unde.
  </p>

  <ol>
    <li>One</li>
    <li>Two</li>
    <li>Three</li>
    <li>Four</li>
  </ol>

  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora nisi dolores
    doloremque iure assumenda tenetur nobis eligendi velit corporis. Esse voluptatem
    delectus repudiandae dolor facere, quaerat temporibus recusandae eligendi animi
    ipsa ea. Eos neque at reiciendis dolore voluptatibus dicta ipsam quia beatae
    suscipit in deleniti, facilis quo doloribus esse itaque rem nam, aspernatur, ut
    molestiae possimus ducimus laboriosam. Numquam voluptas error distinctio eum
    officia alias qui tempore eveniet quibusdam obcaecati? Quae voluptates soluta
    assumenda animi ullam tempora alias voluptatum. Cumque aliquid, velit sit quos a
    dolores repellat earum saepe accusantium non reprehenderit, molestias culpa,
    debitis tempora facilis impedit excepturi unde.
  </p>

  <button>Button</button>
</main>

<style>
  /* Controls */
  aside {
    position: fixed;
    top: 0;
    opacity: 0;
    transition: opacity 100ms;
  }
  aside:hover {
    opacity: 1;
  }
  button {
    padding-block: 0.5rem;
    padding-inline: 1.5rem;
  }
  .isOutline > * {
    background-color: tomato;
    color: white;
  }
  .isBackground > * {
    outline: 1px solid tomato;
  }
</style>
