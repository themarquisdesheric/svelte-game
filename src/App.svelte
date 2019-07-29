<script>
	import { initializeOwls, getRandomOwls } from './utils';
	import Owl from './Owl.svelte';
	
	const numberOfOwls = 25;
	let owls = [];
	let interval

	const shuffleOwls = () => {
		owls = getRandomOwls(numberOfOwls);
	};

	const animateOwls = () => 
		setInterval(
			() => {
				shuffleOwls(numberOfOwls);
			}, 400
		);

	const toggleAnimation = () => {
		if (interval) {
			clearInterval(interval);
			interval = null;
		} else {
			interval = animateOwls();
		}
	};

	shuffleOwls(numberOfOwls);	
	interval = animateOwls();
</script>

<style>
	div {
		background: linear-gradient(to right, #434343, #000000);
		display: flex;
		flex-direction: column;
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
		border: 5px solid #fff;
		padding: 2px;
	}
</style>

<div>
	<main>
		{#each owls as owl (owl.id)}
			<Owl {owl} />
		{/each}
	</main>
	<button on:click={shuffleOwls}>
		Shuffle owls
	</button>
	<button on:click={toggleAnimation}>
		Pause owls
	</button>
</div>
