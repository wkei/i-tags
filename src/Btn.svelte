<script>
  import { onMount, createEventDispatcher } from 'svelte'
	const dispatch = createEventDispatcher()

  let el

  onMount(() => {
    const event = el.ontouchstart ? 'touchstart' : 'click'
    const handler = () => dispatch('tap')
    el.addEventListener(event, handler)

    return () => el.removeEventListener(event, handler)
	});
</script>

<button class='btn' bind:this={el}>
  <slot></slot>
</button>

<style>
  .btn {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    background: none;
    font-size: 1rem;
    padding: 0;
    color: inherit;
    display: inline-block;
    cursor: pointer;
  }
  .btn:active {
    color: #999;
  }
</style>
