<script>
  import { onMount } from 'svelte'
  import { selectedTags } from './store.js'

  export let tag
  let el
  let selected = false
  $: style = selected ? selectedStyle() : ''

  selectedTags.subscribe(v => {
    if (!v.length) {
      selected = false
    }
  })

  onMount(() => {
    const event = el.ontouchstart ? 'touchstart' : 'click'
    el.addEventListener(event, select)

    return () => el.removeEventListener(event, select)
	});

  function select() {
    selected = !selected 
    if (selected) {
      $selectedTags = [...$selectedTags, tag]
    } else {
      $selectedTags.splice($selectedTags.indexOf(tag), 1)
      $selectedTags = [...$selectedTags]
    }
  }

  function isDarkMode() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  }

  function randomHsl(dark) {
    return {
      h: 360 * Math.random(),
      s: 20 + 50 * Math.random(),
      l: (dark ? 30 : 60) + 10 * Math.random()
    }
  }

  function selectedStyle() {
    const { h, s, l } = randomHsl(isDarkMode())
    return `background-color: hsl(${h}, ${s}%, ${l}%)`
  }
</script>

<em class='tag' style={style} bind:this={el}>
  {tag}
</em>

<style>
  .tag {
    display: inline-block;
    font-style: normal;
    padding: .4em .6em;
    background: #eaeaea;
    border-radius: .2em;
    color: #444;
    cursor: pointer;
  }
  @media (prefers-color-scheme: dark) {
    .tag {
      background: #626262;
      color: #ccc;
    }
  }
</style>
