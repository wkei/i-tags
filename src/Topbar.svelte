<script>
  import Btn from './Btn.svelte'
  import { editing, selectedTags } from './store.js'
  import { copy } from './Clipboard.svelte'

  $: selected = $selectedTags.length

  function cancel() {
    $selectedTags = []
  }

  function handleCopy() {
    copy($selectedTags.join(' '))
    cancel()
  }
</script>

<header>
  <div class='action'>
    {#if selected}
      <Btn on:tap={cancel}>
        Cancel 
      </Btn>
    {:else if $editing}
      <Btn on:tap={() => $editing = false}>
        Save
      </Btn>
    {:else}
      <Btn on:tap={() => $editing = true}>
        Edit
      </Btn>
    {/if}
  </div>
  <h1>iTags</h1>
  {#if selected}
    <Btn on:tap={handleCopy}>
      Copy ({selected})
    </Btn>
  {/if}
</header>

<style>
  header {
    display: flex;
    align-items: flex-end;
    flex-wrap: wrap;
    padding: 1em;
    border-bottom: 1px solid #eee;
  }
  h1 {
    margin: 0 auto 0 0;
  }
  .action {
    flex: 1 0 100%;
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    padding-bottom: 0.4em;
  }
  @media (prefers-color-scheme: dark) {
    header {
      background: #222;
      border-bottom-color: #212121;
    }
  }
</style>
