<script>
  import { selectedTags } from './store.js'
  const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches

  export let tag
  let selected = false
  $: style = selected ? selectedStyle() : ''

  selectedTags.subscribe(v => {
    if (!v.length) {
      selected = false
    }
  })

  function select() {
    selected = !selected 
    if (selected) {
      $selectedTags = [...$selectedTags, tag]
    } else {
      $selectedTags.splice($selectedTags.indexOf(tag), 1)
      $selectedTags = [...$selectedTags]
    }
  }

  function randomHsl(l = 'light') {
    return {
      h: 360 * Math.random(),
      s: 20 + 50 * Math.random(),
      l: (isDarkMode ? 30 : 60) + 10 * Math.random()
    }
  }

  function selectedStyle() {
    const { h, s, l } = randomHsl()
    return `background-color: hsl(${h}, ${s}%, ${l}%)`
  }
</script>

<em class='tag' style={style} on:click={select}>
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
