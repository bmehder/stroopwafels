// Click Outside
export const clickOutside = (element: HTMLElement, callbackFunction: () => void) => {
  const handleClick = (evt: MouseEvent) =>
    !element.contains(evt.target) && callbackFunction()

  document.body.addEventListener('click', handleClick, { capture: true })

  return {
    update(newCallbackFunction: () => void) {
      callbackFunction = newCallbackFunction
    },
    destroy() {
      document.body.removeEventListener('click', handleClick)
    },
  }
}
