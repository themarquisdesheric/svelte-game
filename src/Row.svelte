<style>
  .row { display: flex; }
</style>

<script>
  import Column from './Column.svelte';
</script>

<div class="row">
  {#each [1,2,3,4,5] as column}
    <Column />
  {/each}
</div>
