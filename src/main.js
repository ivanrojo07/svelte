import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		name: 'Ivan',
		lastName: 'Rojo'
	}
});

export default app;