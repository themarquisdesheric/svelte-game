import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		winningOwl: null
	}
});

export default app;