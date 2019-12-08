<script context="module">
  import { tick } from 'svelte';
  let clipboard

  export function copy(str) {
    clipboard.value = str
    clipboard.select()
    document.execCommand('copy')
  }
</script>

<textarea bind:this={clipboard}></textarea>

<style>
  textarea {
    position: absolute;
    left: 100%;
    top: 100%;
    width: 0;
    height: 0;
    margin: 0;
    padding: 1;
    border: none;
  }
</style>
