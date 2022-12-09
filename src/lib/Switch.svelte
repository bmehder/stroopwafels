<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  const dispatch = createEventDispatcher()

  let isChecked = false

  $: isChecked ? dispatch('checked') : dispatch('unchecked')
</script>

<input type="checkbox" bind:checked={isChecked} />

<style>
  input {
    width: 50px;
    height: 30px;
    position: relative;
    border-radius: 25px;
    background-color: #ccc;
    outline: none;
    -webkit-appearance: none;
    transition: background 0.3s;
    cursor: pointer;
  }
  input::after {
    content: '';
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    top: 50%;
    left: 30%;
    background-color: white;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: left 0.3s;
  }
  input:checked {
    background-color: var(--background, var(--light));
  }
  input:checked::after {
    left: 70%;
  }
</style>
