<script lang="ts">
  import LeftArrow from './LeftArrow.svelte'
  import PausePlay from './PausePlay.svelte'
  import RightArrow from './RightArrow.svelte'

  // Slides
  type Slides = {
    src: string
    text: string
    options: {
      top?: string
      left?: string
      transform?: string
    }
  }[]

  export let slides: Slides = [
    {
      src: 'slides/slider1.jpg',
      text: 'Hello <br /> Slider 1',
      options: { top: '50%', left: '50%' },
    },
    {
      src: 'slides/slider2.jpg',
      text: 'Hello <br /> Slider 2',
      options: { top: '50%', left: '50%' },
    },
    {
      src: 'slides/slider3.jpg',
      text: 'Hello <br /> Slider 3',
      options: { top: '50%', left: '50%' },
    },
    {
      src: 'slides/slider4.jpg',
      text: 'Hello <br /> Slider 4',
      options: { top: '50%', left: '50%' },
    },
  ]

  export let duration = 6000
  export let color = 'white'
  export let isAutoplay = true

  let container: HTMLDivElement
  let innerWidth: number
  let intervalId: number
  let xPosition = 0

  const stopAutoPlay = () => {
    clearInterval(intervalId)
    isAutoplay = false
  }

  const toggleAutoplay = () => {
    isAutoplay = !isAutoplay

    isAutoplay ? setLocalStorage(true) : setLocalStorage(false)
  }

  // TEMP
  // localStorage.setItem('isAutoPlaySetting', JSON.stringify('false'))

  const setLocalStorage = (choice: boolean) => {
    localStorage.setItem('isAutoPlaySetting', JSON.stringify(choice))
  }

  const getLocalStorage = (isAutoPlaySetting: string) => {
    if (!localStorage.getItem(isAutoPlaySetting)) return null

    const value: string = localStorage.getItem(isAutoPlaySetting) ?? ''

    return value === 'true'
  }

  const startAutoPlay = (node: HTMLElement, isAutoplay: boolean) => {
    const play = () => {
      intervalId = window.setInterval(moveSlides, duration)
    }

    const isAutoPlaySetting: boolean | null = getLocalStorage('isAutoPlaySetting')

    if (isAutoPlaySetting != null) {
      isAutoplay = isAutoPlaySetting
    }

    isAutoplay ? play() : stopAutoPlay()

    return {
      update(isNewAutoplay: boolean) {
        isNewAutoplay ? play() : stopAutoPlay()
      },
      destroy() {
        stopAutoPlay()
      },
    }
  }

  const reset = () => {
    container.scrollTo({ left: 0, behavior: 'smooth' })
    xPosition = 0
  }

  const moveSlides = (direction: string) => {
    const isBack = direction === 'Back'
    const scrollLeftOptions: ScrollToOptions = {
      left: -innerWidth,
      behavior: 'smooth',
    }
    const scrollRightOptions: ScrollToOptions = {
      left: innerWidth,
      behavior: 'smooth',
    }
    const scrollToOptions = isBack ? scrollLeftOptions : scrollRightOptions

    const isEnd = () => xPosition === innerWidth * slides.length

    const setXPosition = () => {
      xPosition = container.scrollLeft + innerWidth

      isEnd() && reset()
    }

    container.scrollBy(scrollToOptions)
    setXPosition()
  }

  const handleKeydown = (evt: KeyboardEvent) => {
    evt.key === 'ArrowLeft' && moveSlides('Back')
    evt.key === 'ArrowRight' && moveSlides('Forward')
  }
</script>

<svelte:window bind:innerWidth on:keydown={handleKeydown} />

<aside use:startAutoPlay={isAutoplay}>
  <PausePlay on:click={toggleAutoplay} bind:isAutoplay --width="2.5rem" />

  <div bind:this={container}>
    {#each slides as { src, text, options: { top, left } }}
      <article>
        <img {src} alt="" />
        <h2 style="top: {top}; left: {left};">
          <span style:color>{@html text}</span>
        </h2>
      </article>
    {/each}
  </div>

  <LeftArrow on:click={() => moveSlides('Back')} />
  <RightArrow on:click={() => moveSlides('Forward')} />
</aside>

<style>
  aside {
    position: relative;
  }
  div {
    position: relative;
    width: 100%;
    height: var(--height, 70vh);
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }
  img {
    width: 100%;
    height: 100%;
    display: block;
    scroll-snap-align: start;
    object-fit: cover;
  }
  article {
    position: relative;
    min-width: 100%;
  }
  h2 {
    position: absolute;
    margin: 0;
    color: var(--color, --dark);
    font-size: 10vw;
    line-height: 1.1em;
    text-align: center;
    transform: translate(-50%, -50%);
  }
  span {
    color: var(--color, white);
    text-shadow: 5px 5px 10px rgba(0, 0, 0, 0.24), -5px -5px 10px rgba(0, 0, 0, 0.12);
  }
  /* span {
    background: linear-gradient(
      to right,
      var(--dark),
      var(--medium),
      var(--light),
      var(--dark)
    );
    background-size: 200%;
    white-space: nowrap;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: background-pan 32s linear infinite;
  }
  @keyframes background-pan {
    from {
      background-position: 0% center;
    }
    to {
      background-position: -200% center;
    }
  } */
  @media screen and (max-width: 600px) {
    div {
      height: 90vh;
    }
    h2 {
      /* top: 20% !important;
      left: 50% !important; */
      font-size: 5rem;
    }
  }
</style>
