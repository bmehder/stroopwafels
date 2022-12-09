<script lang="ts">
  let dialogElement: HTMLDialogElement
  let isOpen = false

  const closeModal = (element: HTMLDialogElement) => {
    const callback = (event: MouseEvent) => {
      const box = element.getBoundingClientRect()

      const isInBox =
        box.top <= event.clientY &&
        event.clientY <= box.top + box.height &&
        box.left <= event.clientX &&
        event.clientX <= box.left + box.width

      if (isInBox) return

      isOpen = false
    }

    element.addEventListener('click', callback)

    return {
      destroy() {
        element.removeEventListener('click', callback)
      },
    }
  }

  export const openModal = (): void => {
    isOpen = true
  }

  $: isOpen ? dialogElement?.showModal() : dialogElement?.close()
</script>

<svelte:window on:keydown={evt => evt.key === 'Escape' && (isOpen = false)} />

<div>
  <dialog bind:this={dialogElement} use:closeModal>
    <slot />
    <a
      href={'#'}
      class="close-button"
      on:click|preventDefault={() => (isOpen = false)}
      on:keypress={() => (isOpen = false)}>X</a
    >
  </dialog>
</div>

<style>
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  dialog[open] {
    margin: auto;
    padding: 2rem;
    background: var(--background, var(--white));
    color: var(--color, var(--black));
    border: none;
    border-radius: var(--radius);
    box-shadow: 0 1em 2em rgb(0 0 0 / 0.25);
    overflow: visible;
  }
  dialog::backdrop {
    background: rgba(0, 0, 0, 0.9);
  }
  .close-button {
    display: grid;
    place-content: center;
    position: absolute;
    top: -1rem;
    right: -1rem;
    width: calc(var(--spacing) * 1.5);
    height: calc(var(--spacing) * 1.5);
    background: var(--closeBackground, var(--light));
    color: var(--closeColor, var(--white));
    border-radius: 50%;
    text-decoration: none;
    cursor: pointer;
  }
  .close-button:focus {
    outline: none;
    animation: pulse-white 2s infinite;
  }
  @keyframes pulse-white {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(255, 255, 255, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
    }
  }
  .close-button:hover {
    scale: 0.95;
    transition: scale 100ms ease-in-out;
  }
  @media (min-width: 769px) {
    dialog[open] {
      width: clamp(150px, 50%, 600px);
    }
  }
</style>
