<script lang="ts">
  import CopyButton from './CopyButton.svelte'
  
  export let buttons: Array<{
    label: string
    getValue: () => string | undefined
  }>
</script>

<div class="copy-buttons">
  {#each buttons as button}
    <CopyButton label={button.label} getValue={button.getValue} />
  {/each}
</div>

<style>
  .copy-buttons {
    display: inline-flex;
    gap: 6px;
    padding: 6px;
    background: rgba(102, 126, 234, 0.05);
    border: 1px solid rgba(102, 126, 234, 0.15);
    border-radius: 6px;
    backdrop-filter: blur(10px);
  }
</style>