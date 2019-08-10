<script>
	import { initializeOwls, getRandomOwls } from './utils';
	import Owl from './Owl.svelte';

	const numberOfOwls = 25;
	let owls = [];
	let interval;

	const shuffleOwls = () => {
		owls = getRandomOwls(numberOfOwls);
	};

	const animateOwls = () => 
		setInterval(
			() => {
				shuffleOwls(numberOfOwls);
			}, 
			400
		);

	const toggleAnimation = () => {
		if (interval) {
			clearInterval(interval);
			interval = null;
		} else {
			interval = animateOwls();
		}
	};

	// shuffleOwls();	
	// interval = animateOwls();
	owls = initializeOwls(numberOfOwls);
</script>

<style>
	.wrapper {
		background: linear-gradient(to right, #434343, #000000);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		min-height: 100vh;
	}

	main {
		display: grid;
    grid-gap: 1px;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		width: 100%;
		max-width: 700px;
	}
</style>

<div class="wrapper">
	<main>
		{#each owls as owl (owl.id)}
			<Owl {owl} />
		{/each}
	</main>
	<div>
		{#if !interval}
			<button on:click={shuffleOwls}>
				Shuffle owls
			</button>
		{/if}
		<button on:click={toggleAnimation}>
			{interval ? 'Pause' : 'Play'}
		</button>
	</div>
</div>
