<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  export let isOpen = false

  let dialogElement: HTMLDialogElement

  const dispatch = createEventDispatcher()

  const closeModal = (element: HTMLDialogElement) => {
    const callback = (event: MouseEvent) => {
      const box = element.getBoundingClientRect()
      const isInDialog =
        box.top <= event.clientY &&
        event.clientY <= box.top + box.height &&
        box.left <= event.clientX &&
        event.clientX <= box.left + box.width
      if (!isInDialog) {
        dispatch('escape')
      }
    }
    element.addEventListener('click', callback)
    return {
      destroy() {
        element.removeEventListener('click', callback)
      },
    }
  }

  $: isOpen ? dialogElement?.showModal() : dialogElement?.close()
</script>

<svelte:window on:keydown={evt => evt.key === 'Escape' && dispatch('escape')} />

<div>
  <dialog bind:this={dialogElement} use:closeModal>
    <slot />
    <span on:click on:keypress>X</span>
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
    background: var(--white);
    border: none;
    border-radius: var(--radius);
    box-shadow: 0 1em 2em rgb(0 0 0 / 0.25);
    overflow: visible;
  }
  dialog::backdrop {
    background: black;
    opacity: 0.9;
  }
  span {
    display: grid;
    place-content: center;
    position: absolute;
    top: -1rem;
    right: -1rem;
    width: calc(var(--spacing) * 1.5);
    height: calc(var(--spacing) * 1.5);
    background: var(--light);
    color: var(--white);
    border-radius: 50%;
    cursor: pointer;
    z-index: 1;
  }
  span:hover {
    scale: 0.95;
    transition: scale 100ms ease-in-out;
  }
  @media (min-width: 769px) {
    dialog[open] {
      width: clamp(150px, 50%, 600px);
    }
  }
</style>
