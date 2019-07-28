<script>
	import Owl from './Owl.svelte';

	let twentyFive = new Array(25);
</script>

<style>
	main {
		display: grid;
    grid-gap: 1px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		max-width: 850px;
	}
</style>

<main>
	{#each twentyFive as owl}
		<Owl />
	{/each}
</main>
