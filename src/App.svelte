<script>
	import { initializeOwls, fisherYatesShuffle } from './utils';
	import Owl from './Owl.svelte';
		
	const numberOfOwls = 25;
	const owls = initializeOwls(numberOfOwls);
</script>

<style>
	div {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}

	main {
		display: grid;
    grid-gap: 1px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		width: 100%;
		max-width: 850px;
	}
</style>

<div>
	<main>
		{#each owls as owl (owl.id)}
			<Owl {owl} />
		{/each}
	</main>
</div>
