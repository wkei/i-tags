<script>
  import { editing } from './store.js'
  import Topbar from './Topbar.svelte'
  import Editor from './Editor.svelte'
  import Tags from './Tags.svelte'
  import Clipboard from './Clipboard.svelte'
</script>

<main class='app'>
  <Topbar/>
  <div class="view">
    {#if $editing}
      <Editor/>
    {:else}
      <Tags/>
    {/if}
  </div>
</main>

<Clipboard/>

<style>
  :root {
    --fontsize: 18px;
  }
  :global(html, body) {
    width: 100%;
    height: 100%;
    font-size: var(--fontsize);
    box-sizing: border-box;
  }
  :global(body) {
    margin: 0;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
    background: #f8f8f8;
    overflow: hidden;
    -webkit-user-select: none;
    user-select: none;
    cursor: default;
  }
  :global(*, *:after, *:before) {
    box-sizing: inherit;
  }

  .app {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  .view {
    flex: 1;
    overflow: hidden;
  }

  @media (prefers-color-scheme: dark) {
    :global(body) {
      background: #333;
      color: #ddd;
    }
  }
</style>
