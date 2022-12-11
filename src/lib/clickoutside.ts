export const clickOutside = (element: HTMLElement, callbackFunction: () => void) => {
  const _callback = () => callbackFunction()

  const handleClick = (evt: MouseEvent) =>
    !element.contains(evt.target as HTMLElement) && _callback()

  const handleKeypress = (evt: KeyboardEvent) =>
    !element.contains(evt.target as HTMLElement) && _callback()

  document.body.addEventListener('click', handleClick, { capture: true })
  document.body.addEventListener('keypress', handleKeypress, { capture: true })

  return {
    update(newCallbackFunction: () => void) {
      callbackFunction = newCallbackFunction
    },
    destroy() {
      document.body.removeEventListener('click', handleClick)
    },
  }
}
