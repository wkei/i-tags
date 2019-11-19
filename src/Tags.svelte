<script>
import { tags } from './store.js'
import Tag from './Tag.svelte'

$: empty = !$tags.length
</script>

{#if empty}
  <div class='empty'>No Tags</div>
{:else}
  <div class='tags'>
    {#each $tags as tag}
      {#if tag.match(/^#/)}
        <Tag {tag}/>
      {:else}
        <h3 class='title'>{tag}</h3>
      {/if}
    {/each}
  </div>
{/if}

<style>
  .tags {
    padding: 1rem;
    width: 100%;
    height: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
  .tags :global(.tag) {
    margin: 0 .6em .6em 0;
  }
  .title {
    margin-top: .6em;
  }
  .empty {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    color: #888;
    font-size: 3em;
    font-weight: 100;
  }
</style>
