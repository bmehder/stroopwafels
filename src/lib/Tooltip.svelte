<script lang="ts">
  export let message = 'Tooltip help here!'
  export let direction = 'top'
</script>

<span data-tooltip={message} data-flow={direction}><slot /></span>

<style>
  [data-tooltip] {
    position: relative;
    cursor: pointer;
    border-bottom: 2px dashed;
  }
  [data-tooltip]:before,
  [data-tooltip]:after {
    line-height: 1;
    font-size: 0.9em;
    pointer-events: none;
    position: absolute;
    box-sizing: border-box;
    display: none;
    opacity: 0;
  }
  [data-tooltip]:before {
    content: '';
    border: 5px solid transparent;
    z-index: 100;
  }
  [data-tooltip]:after {
    content: attr(data-tooltip);
    text-align: center;
    min-width: 3em;
    max-width: 21em;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 4px 12px;
    border-radius: 9px;
    background: var(--background, var(--dark));
    color: var(--color, var(--white));
    z-index: 99;
    /* text-shadow: 2px 0px 0px var(--black); */
  }
  [data-tooltip]:hover:before,
  [data-tooltip]:hover:after {
    display: block;
    opacity: 1;
  }
  [data-tooltip]:not([data-flow])::before,
  [data-tooltip][data-flow='top']::before {
    bottom: 100%;
    border-bottom-width: 0;
    border-top-color: var(--background, var(--dark));
  }
  [data-tooltip]:not([data-flow])::after,
  [data-tooltip][data-flow='top']::after {
    bottom: calc(100% + 5px);
  }
  [data-tooltip]:not([data-flow])::before,
  [tooltip]:not([data-flow])::after,
  [data-tooltip][data-flow='top']::before,
  [data-tooltip][data-flow='top']::after {
    left: 50%;
    -webkit-transform: translate(-50%, -4px);
    transform: translate(-50%, -4px);
  }
  [data-tooltip][data-flow='bottom']::before {
    top: 100%;
    border-top-width: 0;
    border-bottom-color: var(--background, var(--dark));
  }
  [data-tooltip][data-flow='bottom']::after {
    top: calc(100% + 5px);
  }
  [data-tooltip][data-flow='bottom']::before,
  [data-tooltip][data-flow='bottom']::after {
    left: 50%;
    -webkit-transform: translate(-50%, 8px);
    transform: translate(-50%, 8px);
  }
  [data-tooltip][data-flow='left']::before {
    top: 50%;
    border-right-width: 0;
    border-left-color: var(--background, var(--dark));
    left: calc(0em - 5px);
    -webkit-transform: translate(-8px, -50%);
    transform: translate(-8px, -50%);
  }
  [data-tooltip][data-flow='left']::after {
    top: 50%;
    right: calc(100% + 5px);
    -webkit-transform: translate(-8px, -50%);
    transform: translate(-8px, -50%);
  }
  [data-tooltip][data-flow='right']::before {
    top: 50%;
    border-left-width: 0;
    border-right-color: var(--background, var(--dark));
    right: calc(0em - 5px);
    -webkit-transform: translate(8px, -50%);
    transform: translate(8px, -50%);
  }
  [data-tooltip][data-flow='right']::after {
    top: 50%;
    left: calc(100% + 5px);
    -webkit-transform: translate(8px, -50%);
    transform: translate(8px, -50%);
  }
  [data-tooltip='']::after,
  [data-tooltip='']::before {
    display: none !important;
  }
</style>
