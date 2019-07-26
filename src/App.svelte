<script>
	import Owl from './Owl.svelte';

	export let winningOwl;
</script>

<style>
</style>

<main>
	{#each [1,2,3] as owl}
		<Owl />
	{/each}
</main>
