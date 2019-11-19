<script>
  import { createEventDispatcher } from 'svelte'

	const dispatch = createEventDispatcher()
</script>

<button class='btn' on:click={() => dispatch('tap')}>
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
