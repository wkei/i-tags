<script>
  import { rawTags } from './store.js'
</script>

<textarea class='editor' spellcheck='false' bind:value={$rawTags}></textarea>

<style>
.editor {
  margin: 0;
  padding: 1rem;
  border: none;
  resize: none;
  width: 100%;
  height: 100%;
  font-family: Monaco, monospace;
  font-size: 1rem;
  background: #f6fafd;
  color: #555;
}
  @media (prefers-color-scheme: dark) {
    .editor {
      background: #3f3f3f;
      color: #dfdfdf;
    }
  }
</style>
