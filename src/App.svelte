<script>
	import Row from './Row.svelte';

	export let winningOwl;
</script>

<style>
	main {
		margin: 0 auto;
    width: 80vw;
    max-width: 60vh;
    height: 80vw;
    max-height: 60vh;
	}
</style>

<main>
	{#each [1,2,3,4,5] as row}
		<Row />
	{/each}
</main>
